import Game from "../Game.js";
import Level from "../Level.js";
import {cardsTypeSet} from "../Card.js";

class CardsPanel{
    htmlElement: HTMLElement;
    constructor() {
        this.htmlElement = document.querySelector(".cards-wrapper");
    }

    generateCards(game : Game) {
        let startId : number = 1;
        let cardsAmount : number = Game.level.maxPairsAmount * 2;
        let cards = [];
        for (let i=0; i < cardsAmount / 2; i++) {
            let randomNumber : number = this.getRandomNumberInRange(0, cardsTypeSet.length - 1);
            let card = cardsTypeSet[randomNumber];
            cards.push(new card(startId++));
            cards.push(new card(startId++));
        }

        this.increaseField(Game.level.value);

        for (let card of cards) {
            this.htmlElement.appendChild(card.htmlElement);
        }
    }

    increaseField(level : number) {
        let columnsCount : number;
        switch(level) {
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

    private getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    removeAll() {
        this.htmlElement.innerHTML = "";
    }
}

export default CardsPanel;