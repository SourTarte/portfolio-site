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
        deployed: "Deployed",
    }
];

function createProjectInformation(project) {
    return `
        <article class="project" id="${project.id}">
            <div class="reveal container">
                <div class="project-card my-2 px-3 py-4">
                    <div class="row"">
                        <div class="col">
                        <div>
                            <img src=${project.image} class="img-fluid project-img" alt="..." style="object-fit: contain">
                        </div>
                            
                        </div>
                        <div class="col-9 my-lg-2 mb-5 justify-content-evenly">
                            <!---- Project Title ---->
                            <div class="row pb-2">
                                <div class="col">
                                    <h2 class="text-start">${project.title}</h2>
                                </div>
                                <!---- Programming Language and Tool Icons ---->
                                <div class="col-3 text-end" style="font-size: 21pt;">
                                    ${project.tech}
                                </div>
                            </div>
                            <!---- Project Summary ---->
                            <p>${project.summary}</p>
                            <!---- Links ---->
                            <p><a href=${project.repository} class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover">Repository</a></p>
                            <p><a href=${project.deployed} class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover">Deployed Link</a></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="accordion mt-3" id="AccordionOverview-${project.id}">
                            <div class="accordion-item">
                                <h2 class="accordion-header align-items-center align-content-center">
                                    <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${project.id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${project.id}">
                                    Project Overview
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse-${project.id}" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        ${project.overview}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    offset: 300,
})
const scrollSpyProjects = new bootstrap.ScrollSpy(document.body, {
    target: '#project-link-list',
    rootMargin: `0px 0px -80% 0px`,
})



//Initialising Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))