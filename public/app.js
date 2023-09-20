import { Invoice } from "./classes/invoice.js";
import { Payments } from "./classes/payments.js";
import { ListTemplate } from "./classes/List.js";
/*let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne=new Invoice('chakshu','webd',300);
docTwo=new Payments('mario','sftd',500);

let docs: HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);*/
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const amount = document.querySelector('#amount');
const description = document.querySelector('#description');
//console.log(type,tofrom,amount,description);
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, description.value, amount.valueAsNumber];
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, 'end');
});
