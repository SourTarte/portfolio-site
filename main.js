//Initialising Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//Defining Project Listings
const projects = [
    {
        id: "purranormal",
        title: "Purranormal",
        date: "November 2025",
        image: "assets/img/portfolio-work-screenshots/purranormal-1.png",
        summary: "Halloween-themed hackathon project. This webapp utilises a gesture-driven card interface inspired by modern mobile matching apps, in order to entertain users by pairing them up with prospective pet familiars.",
        overview: `
                <p>Project Timescale: 120 days<br>Team Size: 7</p>
                <strong>Goals</strong>
                <p>For this project, the goal was to (insert brief description) to succeed.</p>
                
                <strong>Achievements</strong>
                <ul>
                    <li>Created a swipable card-based interface, using JavaScript</li>
                    <li>Implemented a back-end solution capable of saving and recalling data entries, utilising Django.</li>
                    <li>Assisted in running stand-up meetings in order to bridge knowledge gaps and align the team's vision.</li>
                    <li>Recorded information rich short-form video documentation, for the purpose of being reviewed by stakeholders.</li>
                </ul>
                
                <strong>Outcomes</strong>
                <p>At the end of this brief the team had resulted in the following product. Here is what it did.</p>
                
                <strong>Reflections</strong>
                <p>If I were to do this project again, here's what I'd do differently.</p>
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
                <p>Project Timescale: 120 days<br>Team Size: 7</p>
                <strong>Goals</strong>
                <p>GoalText</p>
                
                <strong>Achievements</strong>
                <p>ResponsibilityText</p>
                
                <strong>Outcomes</strong>
                <p>OutcomeText</p>
                
                <strong>Reflections</strong>
                <p>ReflectText</p>
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
                <strong>Goals</strong>
                <p>GoalText</p>
                
                <strong>Achievements</strong>
                <p>ResponsibilityText</p>
                
                <strong>Outcomes</strong>
                <p>OutcomeText</p>
                
                <strong>Reflections</strong>
                <p>ReflectText</p>
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
                <strong>Goals</strong>
                <p>GoalText</p>
                
                <strong>Achievements</strong>
                <p>ResponsibilityText</p>
                
                <strong>Outcomes</strong>
                <p>OutcomeText</p>
                
                <strong>Reflections</strong>
                <p>ReflectText</p>
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
                <div class="container">
                    <div class="project-card p-3 my-2">
                        <div class="row">
                            <div class="col">
                            <div class="">
                                <img src=${project.image} class="img-fluid" alt="..." style="object-fit: contain">
                            </div>
                                
                            </div>
                            <div class="col-9 my-lg-2 mb-5 justify-content-evenly">
                                <!---- Project Title ---->
                                <h2 class="text-start">${project.title}</h2>

                                <!---- Programming Language and Tool Icons ---->
                                <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="JavaScript" class="fa-brands fa-square-js"></i>
                                <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="Python" class="fa-brands fa-python"></i>
                                <i data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="bottom" data-bs-content="HTML5" class="fa-brands fa-html5"></i>

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
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-${project.id}" aria-expanded="false" aria-controls="panelsStayOpen-collapse-${project.id}">
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
