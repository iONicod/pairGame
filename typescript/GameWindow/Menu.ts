import Button from "./Button.js";
import Game from "../Game.js"

class Menu{
    htmlElement: HTMLElement;
    startButton: Button;
    finishButton: Button;

    constructor(game : Game){
        this.htmlElement = document.querySelector(".game-buttons-wrapper");

        this.startButton = new Button(
            document.querySelector(".game-control-button--start"),
            () => game.startPlay.call(game));

        this.finishButton = new Button(
            document.querySelector(".game-control-button--finish"),
            () => Game.finishPlay.call(game));

        this.addButton(this.startButton);
    }

    addButton(button: Button) {
        button.htmlElement.classList.remove("hidden");
    }

    removeButton(button: Button) {
        button.htmlElement.classList.add("hidden");
    }
}

export default Menu;