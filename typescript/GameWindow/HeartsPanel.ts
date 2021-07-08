import Game from "../Game.js";

class HeartsPanel{
    htmlElement: HTMLElement;
    constructor() {
        this.htmlElement = document.querySelector(".game-hearts-wrapper");
    }
    removeOne() {
        let lastHeart = this.htmlElement.lastElementChild;
        if (lastHeart) {
            lastHeart.remove();
        }
    }
    reset() {
        this.htmlElement.innerHTML = "";
        for (let i = 0; i < 5; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            this.htmlElement.appendChild(heart);
        }
    }
}

export default HeartsPanel;