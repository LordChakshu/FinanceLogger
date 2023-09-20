import { HasFormatter } from "../interface/HasFormatter";

export class Payments implements HasFormatter {

   
    constructor( readonly recepient:string,
       private description:string,
       public amount:number,
    )
    {}

    format(){
        return `${this.recepient} owes ${this.amount} $ for ${this.description}`;
    }
}