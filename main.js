const loadAtTop = 0;

if(loadAtTop) {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);

        // now initialize animations
        initScrollAnimations();
    });
}
//Defining Project Listings
const projects = [
    {
        id: "purranormal",
        title: "Purranormal",
        date: "November 2025",
        image: "assets/img/portfolio-work-screenshots/purranormal-1.png",
        summary: "Halloween-themed hackathon project. This webapp utilises a gesture-driven card interface inspired by modern mobile matching apps, in order to entertain users by pairing them up with prospective pet familiars.",
        overview: `
            <h5><strong>Goals</strong></h5>
            <p>The overarching objective for this hackathon project was to create a workable full stack application over the course of five days, which adhered to the theme of &#39;Halloween&#39;.</p>
            <h5><strong>Achievements</strong></h5>
            
            <ul>
                <li>Championing the idea that became the core of the team&#39;s vision.</li>
                <li>Creating a swipable card-based interface, using JavaScript.</li>
                <li>Implementing a back-end solution capable of saving and recalling data entries, utilising Django. </li>
                <li>Assisting in running stand-up meetings to help with understanding and following Agile methodologies.</li>
                <li>Checking in with team members who were more junior, in order to bridge knowledge gaps and align team vision. </li>
                <li>Recording information rich short-form video documentation, for the purpose of review by stakeholders.</li>
                <li>Managing the repository, resolving the team&#39;s merge conflicts throughout the development.</li>
            </ul>
            
            <h5><strong>Outcomes</strong></h5>
            <p>I believe that we delivered on what we set out to accomplish, and feel that my efforts meaningfully contributed to the final product. That&#39;s why I, and the rest of the team, were very pleased when it was announced that Purranormal had won second place in the Code Institute &#39;Halloween&#39; Hackathon.</p>
            <h5><strong>Reflections</strong></h5>
            <p>I do believe that it would have been wise to spend more time during task delegation getting the junior team members involved and discussing where they feel they would be most effective.</p>
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
        summary: "Full stack webapp created as a Mockup for a fictional fantasy shopkeeper's e-commerce website.",
        overview: `
            <h5><strong>Goals</strong></h5>
            <p>The requirement for this project was that final product had to be a full-stack web app with at least one example of CRUD functionality. I took this constraint and added to it, implementing my own goals and using the freedom given in the brief to experiment external libraries and UX design.</p>
            <h5><strong>Achievements</strong></h5>
            
            <ul>
                <li>Plotting an intuitive, easy to navigate, layout.</li>
                <li>Implementing two forms of CRUD functionality.
                    <ul>
                        <li>Shopping cart functionality.</li>
                        <li>Customer review section, with 5 star rating system.</li>
                    </ul>
                </li>
                <li>Designing a cohesive and visually pleasing style to the product.</li>
                <li>Utilising a cloud hosting API (Cloudinary) to lower performance overhead.</li>
            </ul>
            
            <h5><strong>Outcomes</strong></h5>
            <p> Alongside the requirements laid out in the brief, I defined a few goals for myself. After the final product was delivered, I felt that I had met and exceeded both the product brief and my own expectations. I am still proud of how I experimented with tools I wasn&#39;t the most comfortable with and overcame problems I&#39;d never faced prior.</p>
            <h5><strong>Reflections</strong></h5>
            <p>The biggest lesson I took from this project was about recognising scope creep. I had created lots of features, trying new things and experimenting. However, this expanding focus lead to me allocating less time to testing, and missing a few very obvious 500 errors. </p>
            <p>I went back and resolved those issues, using it as a learning opportunity, and a point of growth. My takeaway from it was the importance of not working up to the deadline, of allocating time to  dotting the &#39;i&#39;s and crossing the &#39;t&#39;s. To be sure that you haven&#39;t been so focused on taking another step that you forgot to tie your laces and trip over the finish line.</p>
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
        summary: "Web game centering around answering trivia questions, utilising the Open Trivia Database API. Created as a group project for a hackathon ",
        overview: `
                <p>Project Timescale: 120 days<br>Team Size: 7</p>
                <h5><strong>Goals</strong></h5>
                <p>GoalText</p>
                
                <h5><strong>Achievements</strong></h5>
                <p>ResponsibilityText</p>
                
                <h5><strong>Outcomes</strong></h5>
                <p>OutcomeText</p>
                
                <h5><strong>Reflections</strong></h5>
                <p>ReflectText</p>
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
        summary: "A theme for the Obsidian markdown editor, based on the aesthetics of the Lancer TTRPG.",
        overview: `
                <p>Project Timescale: 120 days<br>Team Size: 7</p>
                <h5><strong>Goals</strong></h5>
                <p>GoalText</p>
                
                <h5><strong>Achievements</strong></h5>
                <p>ResponsibilityText</p>
                
                <h5><strong>Outcomes</strong></h5>
                <p>OutcomeText</p>
                
                <h5><strong>Reflections</strong></h5>
                <p>ReflectText</p>
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
        <article class="project">
            <!--<div class="project-year px-0 mx-0 pt-2 pb-1">
                <div class="container">
                    <div class="row">
                        <h2 class="text-end project-year"></h2>
                    </div>
                </div>
            </div>-->
            <div class="reveal container">
                <div class="project-card p-3 my-2">
                    <div class="row">
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

const container = document.getElementById("project-history");
container.innerHTML = projects.map(createProjectInformation).join("");

//Sorting out revealed elements
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // remove if you only want it once
        }
    });
}, {
    threshold: 1 // triggers when 20% visible
});

reveals.forEach(el => observer.observe(el));

//Initialising Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))