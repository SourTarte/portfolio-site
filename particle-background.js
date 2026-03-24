const particleSpeed = 0.0;
const particleRadius = 4; // Visual size of particles
const particleDensity = 150; // Amount of particles on a 1920 x 1080 display
const particleConnectDistance = 100;
const particleConnectWidth = 2;

const particleMinDistance = 100;
const repulsionStrength = 0.01;

const MAX_ROTATION = Math.PI / 360;

const canvas = document.getElementById("bg");

/* =========================
   COLOR SYSTEM
========================= */

function getRandomColor() {
    const isBlue = Math.random() < 0.5;
    let h, s, l;

    if (isBlue) {
        // Blue hues: 200-260 degrees
        h = 190 + Math.random() * 25;
        s = 100;
        l = 75;

        
        //s = 50 + Math.random() * 50; // 50-100%
        //l = 40 + Math.random() * 40; // 40-80%
    } else {
        // Pink hues: 320-360 and 0-20 (wrapping around magenta)
        h = 245 + Math.random() * 25; // 285-310 (magenta)
        s = 100;
        l = 75;
        
        
        //s =  Math.random() * 50; // 50-100%
        //l = 50 + Math.random() * 30; // 50-80%
    }

    return { h, s, l };
}

function hslToString(color, alpha) {
    return `hsla(${Math.round(color.h)}, ${Math.round(color.s)}%, ${Math.round(color.l)}%, ${alpha})`;
}

function blendColors(color1, color2) {
    // Circular average for hue (handles 0-360 wrapping)
    let h1 = color1.h;
    let h2 = color2.h;
    let dh = h2 - h1;
    if (dh > 180) dh -= 360;
    if (dh < -180) dh += 360;
    let h = (h1 + dh / 2) % 360;
    if (h < 0) h += 360;

    return {
        h: h,
        s: (color1.s + color2.s) / 2,
        l: (color1.l + color2.l) / 2
    };
}
const ctx = canvas.getContext("2d");

let particles = [];

/* =========================
   DENSITY SYSTEM
========================= */

function getParticleCount() {
    return Math.round(canvas.width * canvas.height * (particleDensity / (1920 * 1080)));
}

function adjustParticleCount() {
    const target = Math.max(30, Math.min(200, getParticleCount())); // clamp

    const diff = target - particles.length;

    if (diff > 0) {
        for (let i = 0; i < diff; i++) {
            particles.push(createParticle());
        }
    } else if (diff < 0) {
        particles.splice(diff);
    }
}

/* =========================
   RESIZE (DEBOUNCED)
========================= */

function resize() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight - 75;
}

let resizeTimeout;

window.addEventListener("resize", () => {
    resize();

    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        adjustParticleCount();
    }, 150);
});

resize();

/* =========================
   PARTICLE CREATION
========================= */

function createParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * particleSpeed + 0.2,
        angle: Math.random() * Math.PI * 2,
        connections: 0,
        cx: 0,
        cy: 0,
        orbitDir: Math.random() < 0.5 ? -1 : 1,
        color: getRandomColor()
    };
}

function createParticles() {
    const count = getParticleCount();

    for (let i = 0; i < count; i++) {
        particles.push(createParticle());
    }
}

createParticles();

/* =========================
   ANIMATION LOOP
========================= */

let lastTime = performance.now();

function draw(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.connections = 0;
        p.cx = 0;
        p.cy = 0;
    });

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < particleMinDistance && dist > 0) {
                const t = 1 - dist / particleMinDistance;
                const force = repulsionStrength * t * t;

                const nx = dx / dist;
                const ny = dy / dist;

                particles[i].angle += force * ny;
                particles[j].angle -= force * ny;

                particles[i].angle += force * nx;
                particles[j].angle -= force * nx;
            }

            if (dist < particleConnectDistance) {
                particles[i].connections++;
                particles[j].connections++;

                particles[i].cx += particles[j].x;
                particles[i].cy += particles[j].y;

                particles[j].cx += particles[i].x;
                particles[j].cy += particles[i].y;

                // Blend connection color from both particles
                const blendedColor = blendColors(particles[i].color, particles[j].color);
                const opacity = 1 - dist / particleConnectDistance;

                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = hslToString(blendedColor, opacity);
                ctx.lineWidth = particleConnectWidth;
                ctx.stroke();
            }
        }
    }

    particles.forEach(p => {
        if (p.connections > 0) {
            const cx = p.cx / p.connections;
            const cy = p.cy / p.connections;

            const dx = cx - p.x;
            const dy = cy - p.y;

            const baseAngle = Math.atan2(dy, dx);
            const targetAngle = baseAngle + p.orbitDir * Math.PI / 2;

            let diff = targetAngle - p.angle;
            diff = Math.atan2(Math.sin(diff), Math.cos(diff));

            const influence = Math.min(p.connections / 5, 1);
            const ease = 0.15 * influence;

            let step = diff * ease;
            const maxStep = MAX_ROTATION * dt * influence;
            step = Math.max(-maxStep, Math.min(maxStep, step));

            p.angle += step;
        }

        const vx = Math.cos(p.angle) * p.speed;
        const vy = Math.sin(p.angle) * p.speed;

        p.x += vx;
        p.y += vy;

        if (p.x < 0 || p.x > canvas.width) {
            p.angle = Math.PI - p.angle;
        }
        if (p.y < 0 || p.y > canvas.height) {
            p.angle = -p.angle;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = hslToString(p.color, 0.7);
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);