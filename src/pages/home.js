import { createElement } from "../index";

const home = function() {
    const content = document.querySelector('main');

    const homeDiv = createElement('div', ['content-div', 'home-div'], null, null);
    const homeTitle = createElement('p', ['home-title'], null, 'Coff Cafe');
    const homeAddress = createElement('p', ['home-content'], null, '16 Sixth Street ZZZ');
    const homeNowOpen = createElement('p', ['home-content'], null, 'Now Open');

    homeDiv.appendChild(homeTitle);
    homeDiv.appendChild(homeAddress);
    homeDiv.appendChild(homeNowOpen);
    content.appendChild(homeDiv);
}

export default home;