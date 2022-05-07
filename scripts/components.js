/*
     FILE: components.js
     AUTHOR: Giovanni Aratico 
     CREATED: 12-30-2021
     LAST UPDATED: 01-03-2022
*/



const projectsList = {
    "Personal-Website": [`Personal Website`,
        `Demonstrates basic web development skills including HTML and CSS. Utilitizes Bootstrap styling and demonstrates knowledge of git version control.`,
        `https://github.com/garatico/garatico.github.io`],
    "Metacritic-Scraper": [`Metacritic Webscraper`,
        `Demonstrates basic programming skills in Python. Utilitizes the libraries Requests, NumPy and BeautifulSoup to collect data and output to usable formats.`,
        `https://github.com/garatico/Metacritic-Scraper`]
}



// Class allows for reusable components of the navbars on all pages
class GiovanniNavBar extends HTMLElement {
    // Constructor runs function to check page and pushes to custom component
    constructor() {
        super();
        let whichNavBar = this.navBuilder(this.getAttribute('page'));
        this.innerHTML = whichNavBar;
    }
    // Method builds custom Bootstrap NavBar depending on which page the user is on
    navBuilder(attribute) {
        let indexPage = "./index.html";
        let music = "./views/music.html";
        let project = "./views/projects.html";
        let about = "./views/about.html";
        let subPageCheck = this.checkPage(attribute);
        let navBarHTML = `<nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse"
        aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navCollapse">
        <ul class="nav navbar-nav">
            <li class="nav-item">
                <!-- Returns user to home page -->
                <a class="nav-link" href=${subPageCheck + indexPage}>
                    HOME
                </a>
            </li>
            <li class="nav-item">
                <!-- Takes user to music page -->
                <a class="nav-link" href=${subPageCheck + music}>
                    MUSIC
                </a>
            </li>
            <li class="nav-item">
                <!-- Takes user to projects page -->
                <a class="nav-link" href=${subPageCheck + project}>
                    PROJECTS
                </a>
            </li>
            <li class="nav-item">
                <!-- Takes user to about page -->
                <a class="nav-link" href=${subPageCheck + about}>
                    ABOUT
                </a>
            </li>
        </ul>
    </div>
                    </nav>`;
        return navBarHTML;
    }

    // Method checks which page of the website is shown
    checkPage(attribute) {
        if (attribute == 'music' || attribute == 'about' || attribute == 'projects') {
            return ".";
        } else {
            return "";
        }
    }
}

class GiovanniProject extends HTMLElement {
    constructor() {
        super();
        let whichProject = this.projectBuilder(this.getAttribute('project'));
        this.innerHTML = whichProject;
    }
    projectBuilder(project) {
        let thisProject = project;
        if (thisProject in projectsList) {
            console.log(project)
            let projectHTML =
                `<ul id="project">  
            <li id="project_title">
                <strong><i> - ${projectsList[project][0]}</i></strong>
            </li>
            <li id="project_desc">
                ${projectsList[project][1]}
            </li>
            <div id="port_link">
                <a href="${projectsList[project][2]}">
                    Link to Project
                </a>
            </div>
        </ul>`
            return projectHTML;
        } else {
            console.log("NO SUCH PROJECT")
            return "<p></p>";
        }

    }
}

// Defines custom HTML Element
window.customElements.define('giovanni-navbar', GiovanniNavBar);
window.customElements.define('giovanni-project', GiovanniProject);

