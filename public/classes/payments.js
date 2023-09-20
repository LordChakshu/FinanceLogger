export class Payments {
    constructor(recepient, description, amount) {
        this.recepient = recepient;
        this.description = description;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} owes ${this.amount} $ for ${this.description}`;
    }
}
