class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
            this.medium = Math.ceil((this.min + this.max)/2);
            return this.medium
    }

    lower() {
        this.max = this.medium;
        this.guess()
    }

    greater() {
        this.min = this.medium;
        this.guess()
    }
}

module.exports = GuessingGame;
