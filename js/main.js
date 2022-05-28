let lastSelected = null;
let topics = document.querySelector(".tw1").children[1].querySelectorAll("li");
let paragraphes = document.querySelector(".sections").querySelectorAll(".section");
let startTop = document.querySelector('.sections').offsetTop;
console.log(paragraphes[paragraphes.length - 1].clientHeight);
console.log(window.innerHeight);
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
