import Game from "../Game.js";
import { cardsTypeSet } from "../Card.js";
class CardsPanel {
    constructor() {
        this.htmlElement = document.querySelector(".cards-wrapper");
    }
    generateCards(game) {
        let startId = 1;
        let cardsAmount = Game.level.maxPairsAmount * 2;
        let cards = [];
        for (let i = 0; i < cardsAmount / 2; i++) {
            let randomNumber = this.getRandomNumberInRange(0, cardsTypeSet.length - 1);
            let card = cardsTypeSet[randomNumber];
            cards.push(new card(startId++));
            cards.push(new card(startId++));
        }
        this.increaseField(Game.level.value);
        for (let card of cards) {
            this.htmlElement.appendChild(card.htmlElement);
        }
    }
    increaseField(level) {
        let columnsCount;
        switch (level) {
            case 1:
                columnsCount = 2;
                break;
            case 2:
                columnsCount = 3;
                break;
            case 3:
                columnsCount = 4;
                break;
            default:
                columnsCount = 2;
                break;
        }
        this.htmlElement.style.gridTemplateColumns = `repeat(${columnsCount}, 1fr)`;
    }
    getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    removeAll() {
        this.htmlElement.innerHTML = "";
    }
}
export default CardsPanel;
