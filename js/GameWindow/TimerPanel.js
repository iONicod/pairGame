class TimerPanel {
    constructor() {
        this.timerValueSec = 30;
        this.htmlElement = document.querySelector(".game-timer");
    }
    updateTimePanel(leftSec) {
        let leftSecString = leftSec > 9 ? `${leftSec}` : `0${leftSec}`;
        this.htmlElement.innerText = leftSec > 0 ? `00:${leftSecString}` : "00:00";
    }
    resetTime() {
        this.htmlElement.innerText = `00:${this.timerValueSec}`;
    }
}
export default TimerPanel;
