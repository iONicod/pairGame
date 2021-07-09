import Game from "./Game.js";
var State;
(function (State) {
    State[State["closed"] = 0] = "closed";
    State[State["opened"] = 1] = "opened";
})(State || (State = {}));
var Position;
(function (Position) {
    Position["bottom"] = "0";
    Position["top"] = "1";
})(Position || (Position = {}));
class Card {
    constructor(id, title, imageFrontSrc) {
        this.id = id;
        this.title = title;
        this.imageFrontSrc = imageFrontSrc;
        this.state = State.closed;
        this.htmlElement = this.generateHtmlElement();
        this.matched = false;
        let currentCard = this;
        this.htmlElement.addEventListener("click", this.checkAndFlip.bind(currentCard));
    }
    checkAndFlip() {
        if (this.state === State.closed && !this.matched) {
            Game.setNewPickedCard(this);
            this.flip();
        }
    }
    flip() {
        this.changeStatus();
        this.htmlElement.classList.toggle("active");
    }
    changeStatus() {
        if (this.state === State.closed) {
            this.state = State.opened;
        }
        else if (this.state === State.opened) {
            this.state = State.closed;
        }
    }
    generateHtmlElement() {
        let divCardWrapper = document.createElement("div");
        divCardWrapper.classList.add("flip-card");
        divCardWrapper.id = `${this.id}`;
        let divCardInnerWrapper = document.createElement("div");
        divCardInnerWrapper.classList.add("flip-card-inner");
        let divCardFront = document.createElement("div");
        divCardFront.classList.add("flip-card-front");
        let divCardBack = document.createElement("div");
        divCardBack.classList.add("flip-card-back");
        divCardFront.style.backgroundImage = this.imageFrontSrc;
        divCardInnerWrapper.appendChild(divCardBack);
        divCardInnerWrapper.appendChild(divCardFront);
        divCardWrapper.appendChild(divCardInnerWrapper);
        return divCardWrapper;
    }
}
class DolphinCard extends Card {
    constructor(id) {
        super(id, "Dolphin", "url(img/dolphin.jpg)");
    }
}
class LionCard extends Card {
    constructor(id) {
        super(id, "Lion", "url(img/lion.jpg)");
    }
}
class ZebraCard extends Card {
    constructor(id) {
        super(id, "Zebra", "url(img/zebra.jpg)");
    }
}
class ElephantCard extends Card {
    constructor(id) {
        super(id, "Elephant", "url(img/elephant.jpg)");
    }
}
class LeopardCard extends Card {
    constructor(id) {
        super(id, "Leopard", "url(img/leopard.jpg)");
    }
}
let cardsTypeSet = [DolphinCard, LionCard, ZebraCard, ElephantCard, LeopardCard];
export { Card, cardsTypeSet, State };
