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

class GiovanniFooter extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = ` <section class="footer">
        <div id="social-links">
            <a href="https://twitter.com/SanaraX">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
            </a>

            <a href="https://www.linkedin.com/in/giovanni-aratico-8416b2169/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
            </a>

            <a href="https://github.com/garatico">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" class="bi bi-github" viewBox="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
            </a>

            <a href="https://open.spotify.com/artist/18BuWDQXYmChPaft2aOnRS?si=AuqXBlrxQh-smrY-2oPEVg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                </svg>
            </a>

        </div>

        </div>
    </section>`;
    }
}

// Defines custom HTML Element
window.customElements.define('giovanni-navbar', GiovanniNavBar);
window.customElements.define('giovanni-project', GiovanniProject);
window.customElements.define('giovanni-footer', GiovanniFooter);


