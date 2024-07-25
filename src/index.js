import "./styles/styles.css";
import svg from "./media/github.svg";
import renderHome from "./pages/home";
import renderMenu from "./pages/menu";
import renderAbout from "./pages/about";

const content = document.querySelector("main");
const footer = document.querySelector("footer");
const homeButton = document.querySelector('#home-btn');
const menuButton = document.querySelector('#menu-btn');
const aboutButton = document.querySelector('#about-btn');

function createElement(type, classes, id, text) {
    const element = document.createElement(type);
    if (id) element.id = id;

    if (classes) {
       for (let c of classes) {
         element.classList.add(c);
       }
    }

    if (text) element.textContent = text;

    return element;
}

function createFooter() {
    const footerContent = createElement("p", ["footer-content"], null, "Made by Kevin Mak");
    const githubSvg = createElement("a", ["footer-svg"], null, null);
    githubSvg.href = "https://github.com/kmak134";
    githubSvg.target = "blank";
    githubSvg.rel = "noopener noreferrer";
    githubSvg.innerHTML = svg;

    footer.appendChild(footerContent);
    footer.appendChild(githubSvg);

}
function displayHome() {
    content.innerHTML = "";
    renderHome();
}

function displayMenu() {
    content.innerHTML = "";
    renderMenu();
}

function displayAbout() {
    content.innerHTML = "";
    renderAbout();
}

homeButton.addEventListener('click', () => {
    displayHome();
});

menuButton.addEventListener('click', () => {
    displayMenu();
});

aboutButton.addEventListener('click', () => {
    displayAbout();
});

createFooter();
displayHome();


export { createElement }


