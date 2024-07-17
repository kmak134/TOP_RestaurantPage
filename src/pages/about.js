import { createElement } from "../index";


const about = function() {
    const content = document.querySelector('#content');
    const aboutDiv = createElement('div', ['content-div', 'about-div', null, null]);
    const aboutTitle = createElement('p', ['about-title'], null, 'ABOUT');
    const aboutDivider = createElement('hr', ['about-hr'], null, null);
    const aboutText = createElement('p', ['about-text'], null, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, magna et laoreet tincidunt, nulla mi aliquam sem, eget luctus urna nisl a metus. Fusce blandit et eros sollicitudin interdum. Vivamus sapien sem, lacinia sed commodo et, porttitor in mauris. Nunc luctus nisl non hendrerit bibendum. Vivamus ac urna erat. In finibus et lorem sed fringilla. ');
    aboutDiv.appendChild(aboutTitle);
    aboutDiv.appendChild(aboutDivider);
    aboutDiv.appendChild(aboutText);
    content.appendChild(aboutDiv);

}

export default about;