// LODASH FOR CLEAN UP LATER
//const body = document.body
//const div = document.createElement('div')
//const strong = document.createElement('strong')

const projectsList = {
    "Personal-Website": [`Personal Website`,
        `Demonstrates basic web development skills including HTML and CSS. Utilitizes Bootstrap styling and demonstrates knowledge of git version control.`,
        `https://github.com/garatico/garatico.github.io`],
    "Metacritic-Scraper": [`Metacritic Webscraper`,
        `Demonstrates basic programming skills in Python. Utilitizes the libraries Requests, NumPy and BeautifulSoup to collect data and output to usable formats.`,
        `https://github.com/garatico/Metacritic-Scraper`]
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
                        <a href="${projectsList[project][2]}">
                            <strong><i>${projectsList[project][0]}</i></strong>
                        </a>
                    </li>
            <li id="project_desc">
                ${projectsList[project][1]}
            </li>
        </ul>`
            return projectHTML;
        } else {
            console.log("NO SUCH PROJECT")
            return "<p></p>";
        }
    }
}

// Defines custom HTML Element
window.customElements.define('giovanni-project', GiovanniProject);