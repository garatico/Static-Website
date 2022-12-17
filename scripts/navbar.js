class GiovanniNavBar extends HTMLElement {
    constructor() {
        super();
        let whichNavBar = this.navBuilder(this.getAttribute('page'));
        this.append(whichNavBar);
        console.log("CONSTRUCTION COMPLETE");
    }
    navBuilder(attribute) {
        let [indexPage, music, project, about] = ["./index.html", "./views/music.html", "./views/projects.html", "./views/about.html"];
        let subPageCheck = this.checkPage(attribute);
        let div = document.createElement('div');
        let nav = document.createElement('nav');
        let toggle = document.createElement('button')
        div.setAttribute('class', 'nav-container')
        this.setAttributes(nav, {'class':'navbar navbar-expand-lg navbar-dark', 'id':'navbar'})
        this.setAttributes(toggle, {'class':'navbar-toggler','type':'button', 'data-bs-toggle': 'collapse', 'data-bs-target':'#navCollapse', 'aria-controls':'navCollapse', 'aria-expanded':'false','aria-label':'Toggle navigation'})
        toggle.innerHTML = `<span class="navbar-toggler-icon"></span>`
        let navCollapse = document.createElement('div')
        navCollapse.setAttribute('class', 'collapse navbar-collapse')
        navCollapse.setAttribute('id', 'navCollapse')
        let ul = document.createElement('ul')
        ul.setAttribute('class', 'nav navbar-nav')
        // Creates NavBar Items
        let homeLi = this.navButton(`${subPageCheck + indexPage}`, 'HOME')
        let projectLi = this.navButton(`${subPageCheck + project}`, 'PROJECTS')
        let musicLi = this.navButton(`${subPageCheck + music}`, 'MUSIC')
        let aboutLi = this.navButton(`${subPageCheck + about}`, 'ABOUT')
        // Appends items together
        ul.append(homeLi, projectLi, musicLi, aboutLi)
        navCollapse.appendChild(ul)
        nav.append(toggle, navCollapse)
        div.appendChild(nav)
        // Returns final navbar object
        return div
    }
    // Method checks which page of the website is shown
    checkPage(attribute) {
        if (attribute == 'music' || attribute == 'about' || attribute == 'projects') {
            return ".";
        } else {
            return "";
        }
    }
    // Navbar Button 
    navButton(link, text) {
        let li = document.createElement('li')
        li.setAttribute('class', 'nav-item')
        let ahref = document.createElement('a')
        ahref.setAttribute('class', 'nav-link')
        ahref.setAttribute('href', `${link}`)
        ahref.innerText = text
        li.appendChild(ahref)
        return li
    }
    setAttributes(element, attributes) {
        for(var key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
}


window.customElements.define('giovanni-navbar', GiovanniNavBar);