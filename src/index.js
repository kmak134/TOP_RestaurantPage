import "./styles/styles.css";
import renderHome from "./pages/home";
import renderMenu from "./pages/menu";
import renderAbout from "./pages/about";

const content = document.querySelector("#content");
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

displayHome();


export { createElement }


