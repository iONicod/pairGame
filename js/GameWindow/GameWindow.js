import CardsPanel from "./CardsPanel.js";
import HeartsPanel from "./HeartsPanel.js";
import Menu from "./Menu.js";
import TimerPanel from "./TimerPanel.js";
class GameWindow {
    constructor(game) {
        this.cardsPanel = new CardsPanel();
        this.heartsPanel = new HeartsPanel();
        this.menu = new Menu(game);
        this.timerPanel = new TimerPanel();
    }
    showGameField(game) {
        this.menu.removeButton(this.menu.startButton);
        this.menu.addButton(this.menu.finishButton);
        this.cardsPanel.generateCards(game);
        this.heartsPanel.htmlElement.classList.remove("hidden");
        this.cardsPanel.htmlElement.classList.remove("hidden");
    }
    hideGameField() {
        this.menu.removeButton(this.menu.finishButton);
        this.menu.addButton(this.menu.startButton);
        this.cardsPanel.removeAll();
        this.heartsPanel.htmlElement.classList.add("hidden");
        this.cardsPanel.htmlElement.classList.add("hidden");
    }
}
export default GameWindow;
