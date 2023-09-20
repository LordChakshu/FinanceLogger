import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/payments.js";
import { HasFormatter } from "./interface/HasFormatter.js";
import { ListTemplate } from "./classes/List.js";

/*let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne=new Invoice('chakshu','webd',300);
docTwo=new Payments('mario','sftd',500);

let docs: HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);*/

const form=document.querySelector('.new-item-form') as HTMLFormElement;

const type=document.querySelector('#type') as HTMLSelectElement;
const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;
const description=document.querySelector('#description') as HTMLInputElement;

//console.log(type,tofrom,amount,description);
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);



form.addEventListener('submit',(e: Event)=>{
    e.preventDefault();
    
    let values: [string, string, number];
    values = [tofrom.value, description.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value=='invoice')
    {
     doc= new Invoice(...values);
    }
    else{
        doc=new Payments(...values);
    }
    list.render(doc,type.value,'end');


})