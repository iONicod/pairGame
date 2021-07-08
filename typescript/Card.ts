import Game from "./Game.js";

enum State {
    closed = 0,
    opened = 1
}

enum Position {
    bottom = "0",
    top = "1"
}

class Card{
    id : number;
    title : string;
    imageFrontSrc : string;
    htmlElement: HTMLElement;
    state: State;
    matched: boolean;

    constructor(id: number, title:string, imageFrontSrc: string) {
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
        Game.setNewPickedCard(this);
        if(this.state === State.closed) {
            this.flip();
        }
    }

    flip() {
        let frontPart : HTMLElement = this.htmlElement.querySelector(".card-front");
        let backPart : HTMLElement = this.htmlElement.querySelector(".card-back");

        if (this.state === State.opened) {
            frontPart.classList.toggle("card-flip");
            backPart.classList.toggle("card-flip");

        } else if (this.state === State.closed) {
            frontPart.classList.toggle("card-flip");
            backPart.classList.toggle("card-flip");
        }
        this.changeZIndexes(frontPart, backPart);
    }

    private changeZIndexes(frontPart : HTMLElement, backPart : HTMLElement) {
        if (this.state === State.closed) {
            this.state = State.opened;
            frontPart.style.zIndex = Position.top;
            backPart.style.zIndex = Position.bottom;
        }
        else if (this.state === State.opened) {
            this.state = State.closed;
            frontPart.style.zIndex = Position.bottom;
            backPart.style.zIndex = Position.top;
        }
    }

    private generateHtmlElement() : HTMLElement{
        let divCardWrapper = document.createElement("div");
        divCardWrapper.classList.add("card");
        divCardWrapper.id = `${this.id}`;

        let divCardBack = document.createElement("div");
        divCardBack.classList.add("card-back");
        let divCardFront = document.createElement("div");
        divCardFront.classList.add("card-front");


        divCardFront.style.backgroundImage = this.imageFrontSrc;

        divCardWrapper.appendChild(divCardBack);
        divCardWrapper.appendChild(divCardFront);

        return divCardWrapper;
    }
}

class DolphinCard extends Card {
    constructor(id: number) {
        super(id, "Dolphin", "url(img/dolphin.jpg)");
    }
}

class LionCard extends Card {
    constructor(id: number) {
        super(id, "Lion", "url(img/lion.jpg)");
    }
}

class ZebraCard extends Card {
    constructor(id: number) {
        super(id, "Zebra", "url(img/zebra.jpg)");
    }
}

class ElephantCard extends Card {
    constructor(id: number) {
        super(id, "Elephant", "url(img/elephant.jpg)");
    }
}

class LeopardCard extends Card {
    constructor(id: number) {
        super(id, "Leopard", "url(img/leopard.jpg)");
    }
}


let cardsTypeSet = [DolphinCard, LionCard, ZebraCard, ElephantCard, LeopardCard];

export {Card, cardsTypeSet, State};