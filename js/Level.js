class Level {
    constructor(value, maxPairsAmount) {
        this.value = value;
        this.maxPairsAmount = maxPairsAmount;
    }
    raise() {
        this.value++;
        this.maxPairsAmount++;
    }
}
export default Level;
