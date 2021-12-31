

const navBarHTML = `<nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse"
    aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navCollapse">
    <ul class="nav navbar-nav">
        <li class="nav-item">
            <!-- Returns user to home page -->
            <a class="nav-link" href="index.html">
                HOME
            </a>
        </li>
        <li class="nav-item">
            <!-- Takes user to music page -->
            <a class="nav-link" href="./views/music.html">
                MUSIC
            </a>
        </li>
        <li class="nav-item">
            <!-- Takes user to projects page -->
            <a class="nav-link" href="./views/projects.html">
                PROJECTS
            </a>
        </li>
        <li class="nav-item">
            <!-- Takes user to about page -->
            <a class="nav-link" href="./views/about.html">
                ABOUT
            </a>
        </li>
    </ul>
</div>
</nav>`;

const navBarHTMLSub = `<nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollapse"
    aria-controls="navCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navCollapse">
    <ul class="nav navbar-nav">
        <li class="nav-item">
            <!-- Returns user to home page -->
            <a class="nav-link" href="../index.html">
                HOME
            </a>
        </li>
        <li class="nav-item">
            <!-- Takes user to music page -->
            <a class="nav-link" href="../views/music.html">
                MUSIC
            </a>
        </li>
        <li class="nav-item">
            <!-- Takes user to projects page -->
            <a class="nav-link" href="../views/projects.html">
                PROJECTS
            </a>
        </li>
        <li class="nav-item">
            <!-- Takes user to about page -->
            <a class="nav-link" href="../views/about.html">
                ABOUT
            </a>
        </li>
    </ul>
</div>
</nav>`;


class GiovanniNavBar extends HTMLElement {
    constructor() {
        super();
        let whichNavBar = '';
        whichNavBar = this.checkPage(this.getAttribute('page'));
        this.innerHTML = whichNavBar;
    }

    // Method checks which page of the website is shown
    checkPage(attribute) {
        if (attribute == 'music' || attribute == 'about' || attribute == 'projects' ) {
            return navBarHTMLSub;
        } else {
            return navBarHTML;
        }
    }
}

window.customElements.define('giovanni-navbar', GiovanniNavBar);

