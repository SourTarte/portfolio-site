//Defining Project Listings
const projects = [
    {
        id: "purranormal",
        title: "Purranormal",
        date: "November 2025",
        image: "assets/img/portfolio-work-screenshots/purranormal-1.png",
        summary: "Halloween hackathon project featuring a swipe-based matching interface for discovering “pet familiars”, backed by a Django-powered persistence layer.",
        overview: `
            <p><strong>Goals</strong></p>
            <ul>
            <li>Build a full-stack application within 5 days aligned to the “Halloween” theme.</li>
            </ul>
            <p><strong>Achievements</strong></p>
            <ul>
            <li>Proposed and defined the core product concept adopted by the team.</li>
            <li>Built a swipeable, gesture-driven card interface in JavaScript.</li>
            <li>Implemented backend data persistence and retrieval using Django.</li>
            <li>Managed repository workflows, resolving merge conflicts during active development.</li>
            <li>Facilitated stand-ups and supported junior developers to maintain team alignment.</li>
            </ul>
            <p><strong>Outcomes</strong></p>
            <ul>
            <li>Awarded 2nd place in the Code Institute Halloween Hackathon.</li>
            <li>Delivered a functional full-stack product within strict time constraints.</li>
            </ul>
            <p><strong>Reflections</strong></p>
            <ul>
            <li>Task delegation was too top-down early on; involving junior developers sooner would have improved efficiency and ownership.</li>
            </ul>

        `,
        tech:`
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="JavaScript" class="fa-brands fa-square-js"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="Python" class="fa-brands fa-python"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="HTML5" class="fa-brands fa-html5"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="CSS" class="fa-brands fa-css"></i>
        `,
        repository: "https://github.com/hannahro15/CI-Halloween-Hackathon-25",
        deployed: "https://purranormal-26af1e8cdfe0.herokuapp.com/",
    },
    {
        id: "dragonshoard",
        title: "The Dragon's Hoard Barmoury",
        date: "October 2025",
        image: "assets/img/portfolio-work-screenshots/dragonshoard-1.png",
        summary: "Full-stack e-commerce mockup for a fantasy-themed shop, featuring shopping cart functionality, user reviews, and cloud-based media handling.",
        overview: `
            <p><strong>Goals</strong></p>
            <ul>
            <li>Deliver a full-stack application with at least one CRUD feature.</li>
            </ul>
            <p><strong>Achievements</strong></p>
            <ul>
            <li>Designed and implemented site layout and navigation structure.</li>
            <li>Built two CRUD systems:<ul>
            <li>Shopping cart functionality</li>
            <li>Customer reviews with 5-star ratings</li>
            </ul>
            </li>
            <li>Integrated Cloudinary for media storage to reduce server load.</li>
            <li>Developed a consistent visual style aligned with the fantasy theme.</li>
            </ul>
            <p><strong>Outcomes</strong></p>
            <ul>
            <li>Delivered a complete full-stack application exceeding initial brief requirements.</li>
            <li>Successfully implemented and tested multiple new tools and workflows.</li>
            </ul>
            <p><strong>Reflections</strong></p>
            <ul>
            <li>Scope creep reduced time available for testing, leading to avoidable 500 errors.</li>
            <li>Reinforced the need to allocate dedicated time for testing and final validation before delivery.</li>
            </ul>
        `,
        tech:`
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="JavaScript" class="fa-brands fa-square-js"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="Python" class="fa-brands fa-python"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="HTML5" class="fa-brands fa-html5"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="CSS" class="fa-brands fa-css"></i>
        `,
        repository: "https://github.com/SourTarte/fantasy-storefront",
        deployed: "https://squat-llama-c5e1f1c2daa0.herokuapp.com/",
    },
    {
        id: "quizia",
        title: "Quizia",
        date: "September 2025",
        image: "assets/img/portfolio-work-screenshots/quizia-1.png",
        summary: "Hackathon-built trivia web game using the Open Trivia Database API, featuring dynamic question rendering and local score persistence.",
        overview: `
            <p><strong>Goals</strong></p>
            <ul>
            <li>Deliver a functional quiz application within a 4-day hackathon using a predefined project brief.</li>
            <li>Collaborate effectively within a team of four with uneven experience levels.</li>
            </ul>
            <p><strong>Achievements</strong></p>
            <ul>
            <li>Designed and implemented the quiz interface and user interaction flow.</li>
            <li>Integrated the Open Trivia Database API to fetch and display dynamic question data.</li>
            <li>Built client-side logic for answer handling and game progression in JavaScript.</li>
            <li>Implemented local storage to persist player scores across sessions.</li>
            <li>Supported a junior teammate in learning and applying JavaScript during development.</li>
            <li>Adapted team workflow to compensate for inconsistent contributor availability.</li>
            </ul>
            <p><strong>Outcomes</strong></p>
            <ul>
            <li>Delivered a fully functional quiz game within the hackathon timeframe.</li>
            <li>Established a clear separation between core requirements and stretch goals during planning.</li>
            </ul>
            <p><strong>Reflections</strong></p>
            <ul>
            <li>Strong initial planning (requirements vs stretch goals) kept development focused under time pressure.</li>
            <li>Lack of a backend limited the ability to implement persistent online leaderboards.</li>
            </ul>
        `,
        tech:`
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="JavaScript" class="fa-brands fa-square-js"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="HTML5" class="fa-brands fa-html5"></i>
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="CSS" class="fa-brands fa-css"></i>
        `,
        repository: "https://github.com/SourTarte/hackathon-quiz-game",
        deployed: "https://sourtarte.github.io/hackathon-quiz-game/",
    },
    {
        id: "poweredbylancer",
        title: "Powered by Lancer",
        date: "July 2025",
        image: "assets/img/portfolio-work-screenshots/powered-by-lancer.png",
        summary: "Custom CSS theme made for the Obsidian markdown editor, inspired by the aesthetics of the Lancer TTRPG, and officially distributed through Obsidian’s theme marketplace.",
        overview: `
            <p><strong>Goals</strong></p>
            <ul>
            <li>Recreate the visual identity of the Lancer TTRPG within Obsidian.</li>
            <li>Expand beyond foundational CSS knowledge through self-directed learning.</li>
            </ul>
            <p><strong>Achievements</strong></p>
            <ul>
            <li>Designed and implemented a complete Obsidian theme using advanced CSS techniques.</li>
            <li>Conducted detailed visual research to accurately match the Lancer style guide.</li>
            <li>Applied pseudo-elements and more advanced selectors to extend styling capabilities.</li>
            <li>Built upon an existing base theme and significantly extended its functionality and design.</li>
            <li>Successfully published the theme to Obsidian’s official theme repository.</li>
            </ul>
            <p><strong>Outcomes</strong></p>
            <ul>
            <li>Achieved 3,000+ downloads through the Obsidian theme marketplace.</li>
            <li>Delivered a fully usable and stylistically distinct theme adopted by real users.</li>
            </ul>
            <p><strong>Reflections</strong></p>
            <ul>
            <li>Over-prioritised visual accuracy to the source material, negatively impacting dark mode readability.</li>
            <li>Highlighted the importance of balancing aesthetic fidelity with usability.</li>
            <li>Subsequent iterations (by the community) improved on accessibility, reinforcing the value of user feedback.</li>
            </ul>
        `,
        tech:`
            <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="CSS" class="fa-brands fa-css"></i>
        `,
        repository: "https://github.com/SourTarte/Powered-By-Lancer",
        deployed: null,
    },
    {
        id: "heightmap",
        title: "Heightmap Board Generator",
        date: "",
        image: "assets/img/godot-procedural-hex-screenshots.png",
        summary: "While experimenting with the concept of a digital board game, I found myself interested in the topic of procedural generation. Before long I was experimenting with creating that would enable quick, iterative design.<br><br>I created a script that would take an image and output an arrays of hexagonal objects, using the value of each pixel to determine the height at which each object should be outputted.",
        overview: null,
        tech:`
            
        `,
        repository: null,
        deployed: null,
    },
    {
        id: "pythonscripting",
        title: "Python Script Automation",
        date: "",
        image: "assets/img/soulbound-json-parser-screenshot.png",
        summary: "I commonly find myself seeking out ways to lower friction in my day-to-day by automating tasks like transcription and data entry. This image shows the opening lines of a script that I wrote. It parses markdown into JSON ready for import into into FoundryVTT, a virtual tabletop software built using web technologies.",
        overview: null,
        tech:`
            
        `,
        repository: null,
        deployed: null,
    },
];

function createProjectInformation(project) {
    return `
        <article class="project" id="${project.id}">
            <div class="reveal container">
                <div class="project-card my-3 ps-4 pe-4 py-3">
                    <div class="row">
                        <div class="col">
                        <div class="row">
                            <button type="button" class="btn btn-link p-0 border-0 project-image-button" data-bs-toggle="modal" data-bs-target="#projectImageModal" data-bs-image="${project.image}" data-bs-title="${project.title}" aria-label="Open ${project.title} image">
                                <img src="${project.image}" class="img-fluid project-img" alt="Screenshot of ${project.title}" style="object-fit: contain">
                            </button>
                        </div>
                        <div class="row mt-1 mb-0">
                            <p class="text-muted text-center" style="font-size: 11pt;">Click Image to Expand</p>
                        </div>      
                            
                        </div>
                        <div class="col-9 my-lg-2 mb-5 justify-content-evenly">
                            <!---- Project Title ---->
                            <div class="row pb-2">
                                <div class="col">
                                    <h2 class="fw-light fs-4 text-uppercase tracking-wide header-underline">${project.title}</h2>
                                </div>
                                <!---- Programming Language and Tool Icons ---->
                                <div class="col-auto text-end" style="font-size: 21pt;">
                                    ${project.tech}
                                </div>
                            </div>
                            <!---- Project Summary ---->
                            <p>${project.summary}</p>
                        </div>
                    </div>
                    ${project.overview ? `<div class="row">
                        <div class="accordion mt-3" id="AccordionOverview-${project.id}">
                            <div class="accordion-item">
                                <h2 class="accordion-header align-items-center align-content-center">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${project.id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${project.id}">
                                    Project Overview
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse-${project.id}" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <div class="container py-3 ps-0 ms-0">
                                            ${project.repository ? `<a href=${project.repository}  target="_blank" class="btn btn-outline-light btn-sm">Repository</a>` : ""}
                                            ${project.deployed ? `<a href="${project.deployed}" target="_blank" class="btn btn-outline-light btn-sm">Deployed Link</a>` : ""}
                                        </div>
                                        
                                        ${project.overview}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>` : ""}
                    
                </div>
            </div>
        </article>
    `;
}

function createProjectLinks(project) {
    return `
        <li class="nav-item">
            <a class="nav-link project-link" href="#${project.id}">${project.title}</a>
        </li>
    `
}

const container = document.getElementById("project-history");
container.innerHTML = projects.map(createProjectInformation).join("");

const projectLinkContainer = document.getElementById("project-link-list");
projectLinkContainer.innerHTML = projects.map(createProjectLinks).join("");

//Sorting out revealed elements
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 1 // triggers when 20% visible
});

reveals.forEach(el => observer.observe(el));

const scrollSpyNav = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 0,
})

// Modal image handling
const projectImageModal = document.getElementById('projectImageModal');
if (projectImageModal) {
    projectImageModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const imageSrc = button.getAttribute('data-bs-image');
        const title = button.getAttribute('data-bs-title');
        const modalImg = this.querySelector('.modal-body img');
        const modalTitle = this.querySelector('.modal-title');

        if (modalImg) {
            modalImg.src = imageSrc;
            modalImg.alt = `Screenshot of ${title}`;
        }
        if (modalTitle) {
            modalTitle.textContent = title;
        }
    });
}

//Initialising Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))