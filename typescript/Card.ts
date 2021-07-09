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
        if(this.state === State.closed && !this.matched) {
            Game.setNewPickedCard(this);
            this.flip();
        }
    }

    flip() {
        this.changeStatus();
        this.htmlElement.classList.toggle("active");
    }

    changeStatus() {
        if(this.state === State.closed) {
            this.state = State.opened;
        } else if (this.state === State.opened) {
            this.state = State.closed;
        }
    }

    private generateHtmlElement() : HTMLElement{
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
