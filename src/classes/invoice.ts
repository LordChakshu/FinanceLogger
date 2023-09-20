import { HasFormatter } from "../interface/HasFormatter";

export class Invoice implements HasFormatter{

    
    constructor(
        readonly client:string,
        private description:string,
        public amount:number,
    )
    {}

    format(){
        return `${this.client} owes ${this.amount} $ for ${this.description}`;
    }
}