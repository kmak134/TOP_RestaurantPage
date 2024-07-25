import { createElement } from "../index";

const createMenuItem = function(name, price, content) {
    const item = createElement('div', ['menu-item'], null, null);
    const itemName = createElement('div', ['item-name'], null, name);
    const itemPrice = createElement('div', ['item-price'], null, price);
    const itemContent = createElement('div', ['item-content'], null, content);

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemContent);

    return item;
}

const menu = function() {
    const content = document.querySelector('main');
    const menuDiv = createElement('div', ['content-div', 'menu-div'], null, null);
    const menuDivider = createElement('hr', ['about-hr'], null, null);
    const menuTitle = createElement('p', ['menu-title'], null, 'MENU');
    const menuGrid = createElement('div', ['menu-grid'], null, null);

    menuGrid.appendChild(createMenuItem('Black Tea Latte', '$6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
    menuGrid.appendChild(createMenuItem('Fruit Foam Latte', '$9', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
    menuGrid.appendChild(createMenuItem('Barley Latte', '$7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
    menuGrid.appendChild(createMenuItem('Mochaccino', '$8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
    menuGrid.appendChild(createMenuItem('Espresso', '$7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));

    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(menuDivider);
    menuDiv.appendChild(menuGrid);
    content.appendChild(menuDiv);
}

export default menu;