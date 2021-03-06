import {Card} from "./Card.js";
import Level from "./Level.js";
import GameWindow from "./GameWindow/GameWindow.js";
import {State} from "./Card.js";
import HeartsPanel from "./GameWindow/HeartsPanel";

class Game{
    static pickedCard : Card | undefined;
    static level: Level;
    static score: number;
    static hearts: number;
    static timer: any;
    static timerSec: number;
    static gameWindow: GameWindow;

    constructor(levelValue: number, heartsAmount: number) {
        Game.level = new Level(levelValue, levelValue + 1);
        Game.hearts = heartsAmount;
        Game.timerSec = 30;
        Game.score = 0;
    }

    run() {
        Game.gameWindow = new GameWindow(this);
    }

    startPlay() {
        Game.gameWindow.showGameField(this);
        Game.timer = setInterval(() => {
            Game.timerSec--;
            Game.gameWindow.timerPanel.updateTimePanel(Game.timerSec);
            if (Game.timerSec < 0)
                Game.finishPlay();
        }, 1000);
    }

    static finishPlay() {
        if (Game.score < Game.level.maxPairsAmount) {
            Game.lose();
        }
        else {
            Game.win();
        }
    }

    static setNewPickedCard(newCard : Card) {
        if (Game.pickedCard
            && !newCard.matched){

            Game.checkPair(Game.pickedCard, newCard);
            Game.pickedCard = undefined;
        } else if (!newCard.matched){

            Game.pickedCard = newCard;
        }
    }

    static checkPair(card1 : Card, card2 : Card) {
        if (card1.title === card2.title
            && card1.id !== card2.id
            && !card1.matched
            && !card2.matched) {

            card1.matched = true;
            card2.matched = true;
            Game.editScore();
        }
        else if (card1.id !== card2.id
            && !card1.matched
            && !card2.matched) {

            Game.hidePair(card1, card2);
            Game.hearts--;
            Game.gameWindow.heartsPanel.removeOne();
            if (Game.hearts === 0)
                Game.finishPlay();
        }
    }

    static hidePair(card1 : Card, card2 : Card) {
        setTimeout(() => {
            card1.flip();
            card2.flip()
        }, 500);
    }

    static editScore() {
        Game.score++;
        Game.checkWin();
    }

    static checkWin() {
        if (Game.score === Game.level.maxPairsAmount)
            Game.finishPlay();
    }

    static lose() {
        setTimeout(() => {
            Game.resetGame();
            alert("???? ??????????????????");
        }, 500);
    }

    static win() {
        if (Game.level.value === 3 ) {
            setTimeout(() => {
                Game.resetGame();
                alert("??????????????????????, ???? ????????????????!");
            }, 500);
        }
        else {
            setTimeout(() => {
                alert("??????????????????????, ???? ???????????????????? ???? ?????????? ??????????????!");
                Game.changeLevel();
            }, 500);
        }
    }

    static changeLevel() {
        Game.timerSec = 30;
        Game.score = 0;
        clearInterval(Game.timer);
        Game.gameWindow.cardsPanel.removeAll();
        Game.gameWindow.timerPanel.resetTime();

        let newGame = new Game(Game.level.value, Game.hearts);
        Game.level.raise();
        newGame.startPlay();
    }

    private static resetGame() {
        Game.level = new Level(1,2);
        Game.hearts = 5;
        Game.timerSec = 30;
        Game.score = 0;

        clearInterval(Game.timer);
        Game.gameWindow.timerPanel.resetTime();
        Game.gameWindow.hideGameField();
        Game.gameWindow.heartsPanel.reset();
    }
}

export default Game;