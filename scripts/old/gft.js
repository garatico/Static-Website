export default class GiovanniFooter extends HTMLElement {
    constructor() {
        super();
        // NEW DYNAMIC FOOTER
        let section = document.createElement('section')
        let div = document.createElement('div')
        let twit = this.socialButtion(socialLinks['twitter'], svgList['twitter'])
        let linkIn = this.socialButtion(socialLinks['linkedin'], svgList['linkedin'])
        let github = this.socialButtion(socialLinks['github'], svgList['github'])
        let sptfy = this.socialButtion(socialLinks['spotify'], svgList['spotify'])
        section.setAttribute('class', 'footer')
        div.setAttribute('id', 'social-links')
        section.appendChild(div)
        div.append(twit, linkIn, github, sptfy)
        this.append(section)
    }
    socialButtion(link, svg) {
        let ahref = document.createElement('a')
        ahref.setAttribute('href', link)
        ahref.innerHTML = svg
        return ahref
    }
}