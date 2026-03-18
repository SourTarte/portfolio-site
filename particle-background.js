const particleSpeed = 0.6;
const particleRadius = 4;
const particleConnectDistance = 100;
const particleConnectWidth = 2;

const particleMinDistance = 50;   // how close is “too close”
const repulsionStrength = 0.04;   // how strongly they push away

const MAX_ROTATION = Math.PI / 180; // 1 degree/sec

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let particles = [];
const COUNT = 100;

function resize() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}
window.addEventListener("resize", resize);
resize();

function createParticles() {
    particles = [];
    for (let i = 0; i < COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * particleSpeed + 0.2,
            angle: Math.random() * Math.PI * 2,
            connections: 0,
            cx: 0, // centroid x
            cy: 0,  // centroid y
            orbitDir: Math.random() < 0.5 ? -1 : 1
        });
    }
}
createParticles();

let lastTime = performance.now();

function draw(time) {
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset connection data
    particles.forEach(p => {
        p.connections = 0;
        p.cx = 0;
        p.cy = 0;
    });

    // Calculate connections + centroid accumulation + draw lines
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // --- Repulsion force when too close ---
            if (dist < particleMinDistance && dist > 0) {

                const t = 1 - dist / particleMinDistance; // 0 → 1
                const force = repulsionStrength * t * t;  // quadratic falloff

                // Normalized direction from j → i
                const nx = dx / dist;
                const ny = dy / dist;

                // Apply repulsion to angles (steering)
                particles[i].angle += force * ny;
                particles[j].angle -= force * ny;

                particles[i].angle += force * nx;
                particles[j].angle -= force * nx;
            }

            if (dist < particleConnectDistance) {
                particles[i].connections++;
                particles[j].connections++;

                // accumulate positions for centroid
                particles[i].cx += particles[j].x;
                particles[i].cy += particles[j].y;

                particles[j].cx += particles[i].x;
                particles[j].cy += particles[i].y;

                // draw line
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(255,255,255,${1 - dist / particleConnectDistance})`;
                ctx.lineWidth = particleConnectWidth;
                ctx.stroke();
            }
        }
    }

    // Update particles
    particles.forEach(p => {

        if (p.connections > 0) {


            // Compute centroid
            const cx = p.cx / p.connections;
            const cy = p.cy / p.connections;

            // Vector toward centroid
            const dx = cx - p.x;
            const dy = cy - p.y;

            // Base angle toward centroid
            const baseAngle = Math.atan2(dy, dx);

            // Perpendicular angle (orbit)
            const targetAngle = baseAngle + p.orbitDir * Math.PI / 2;

            // Shortest angular difference
            let diff = targetAngle - p.angle;
            diff = Math.atan2(Math.sin(diff), Math.cos(diff));

            // Influence scaling
            const influence = Math.min(p.connections / 5, 1);

            // Easing factor (smooth steering)
            const ease = 0.15 * influence; // scale by connection influence

            // Clamp rotation AFTER easing
            let step = diff * ease;
            const maxStep = MAX_ROTATION * dt * influence;
            step = Math.max(-maxStep, Math.min(maxStep, step));

            p.angle += step;
        }

        // Convert to velocity
        const vx = Math.cos(p.angle) * p.speed;
        const vy = Math.sin(p.angle) * p.speed;

        p.x += vx;
        p.y += vy;

        // Bounds
        if (p.x < 0 || p.x > canvas.width) {
            p.angle = Math.PI - p.angle;
        }
        if (p.y < 0 || p.y > canvas.height) {
            p.angle = -p.angle;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
    });

    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);