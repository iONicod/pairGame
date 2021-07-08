import Game from "../Game.js";

class Button{
    htmlElement: HTMLElement;
    constructor(element : HTMLElement, action: () => {}) {
        this.htmlElement = element;
        this.htmlElement.addEventListener('click', () => {
            action();
        });
    }
}

export default Button;