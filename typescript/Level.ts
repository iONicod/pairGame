class Level {
    value: number;
    maxPairsAmount: number;
    constructor(value: number, maxPairsAmount: number) {
        this.value = value;
        this.maxPairsAmount = maxPairsAmount;
    }
    raise() {
        this.value++;
        this.maxPairsAmount++;
    }
}
export default Level;