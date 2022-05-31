// à remplacer par l'adresse de publication du site https://eralit.github.io ou https://eralyt.com
//const root = "/media/vincent/Niusha/Freelance/site/dist";
const root = "https://eralit.github.io";

const hlogo = document.querySelector('.hlogo');
const svg = document.querySelector('.logoe');
const a = document.createElement("a");
a.setAttribute("href", root + "/index.html");
a.appendChild(svg);
hlogo.appendChild(a);


// synchronisation scrolling

let lastSelected = null;
let topics = document.querySelector(".tw1").children[1].querySelectorAll("li");
let paragraphes = document.querySelector(".sections").querySelectorAll("section");
let startTop = document.querySelector('.sections').offsetTop;
if (paragraphes.length != 0)
    document.querySelector('.cw1').style.marginBottom = window.innerHeight - paragraphes[paragraphes.length - 1].clientHeight - 55 + "px";

window.addEventListener('scroll', () => {
    let current = "";
    let last = null;
    let i = 0;
    for (i = 0; i < paragraphes.length; ++i) {
        let section = paragraphes[i];
        const sectionTop = section.offsetTop;
        if (scrollY < sectionTop + startTop) {
            break;
        }
    }
    // i - 1 : index du paragraphe courant
    if (i > 0) {
        let current = topics[i - 1].firstElementChild;
        if (!current.classList.contains('active')) {
            if (lastSelected) lastSelected.classList.remove('active');
            current.classList.add('active');
            lastSelected = current;
        }
    } else {
        if (lastSelected) lastSelected.classList.remove('active');
    }
})

// menu global de navigation

const nav = document.querySelector('.nw1-content');
const navWebItems = [
    { name: "HTML", link: "/content/html/html.html", childs: null },
    { name: "CSS", link: "/content/css/css.html", childs: null },
    { name: "JavaScript", link: "/content/javascript/javascript.html", childs: null },
    { name: "Node.js", link: "/content/nodejs/nodejs.html", childs: null },
    { name: "React", link: "/content/react/react.html", childs: null }
];

const navProgItems = [
    { name: "C++", link: "/content/C++/C++.html", childs: null },
    { name: "Algorithmes", link: "/content/algorithmes/algorithmes.html", childs: null }
];

const navGithub = [
    { name: "2html", link: "/content/utilitaires/2html.html", childs: null },
    { name: "NsLibrary", link: "/content/Ns/ns.html", childs: null }
]

function createNavigation(items) {
    let menu = document.createElement("div");
    menu.classList.add("menu-items");
    items.forEach(item => {
        let a = document.createElement("a");
        a.setAttribute("href", root +  item.link);
        a.textContent = item.name;  
        menu.appendChild(a);
    })
    nav.appendChild(menu);
}

function addSeparator(name) {
    let sep = document.createElement("div");
    sep.classList.add('separator');
    sep.textContent = name;
    nav.appendChild(sep);
}

addSeparator("Technologies WEB");
createNavigation(navWebItems);
addSeparator("Programmation");
createNavigation(navProgItems);
addSeparator("Sur GitHub");
createNavigation(navGithub);
