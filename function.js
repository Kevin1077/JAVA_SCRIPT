
//reduce()

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const total=prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(pre_element,element){
    return pre_element+element;
}

//function expression

const hello=function(){
    console.log("Hello");
}

hello();

setTimeout(function hell() { console.log("Hello"); }, 3000);

//Arrow function

const hello1 = (name,age) =>{
    console.log(`hello ${name}. You are  ${age} years old`);
}

hello1("kevin",20);
