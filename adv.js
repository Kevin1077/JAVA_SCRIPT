import {PI, getCircleArea} from './mathutil.js';

console.log(PI);

console.log(getCircleArea(5));

//synchronous and asynchronous

//asynchronous multiple operation are performed concurrently.

setTimeout(()=> console.log('Hello'), 2000);

console.log('World');
console.log('Hello');


//error

const divident = window.prompt("Enter a divident: ");    
const divisor = window.prompt("Enter a divisor: ");

try{
    const result =divident/divisor;
    console.log(`Result: ${result}`);

    if (divisor == 0){
          throw new Error('Divisor cannot be zero');
    }
}
catch(error){
    console.error(error);
}

finally{
    console.log('Finally block');
}
5
console.log('World');

const cov = document.getElementById("cov");

if (cov) {
    cov.style.backgroundColor = "red";
} else {
    console.error('Element with id "conv" not found.');
}

const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits) {
    fruit.style.backgroundColor = "green";
}


const vege = document.getElementsByTagName("h4");
const li=document.getElementsByTagName("li");
console.log(vege);

for(let v of vege){
    v.style.backgroundColor = "yellow";
}

for(let list of li){
    list.style.backgroundColor = "blue";
}
