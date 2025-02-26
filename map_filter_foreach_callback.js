
//callback

sum(average,5,2);
function sum(callback,x,y){
    let sum=x+y;
    callback(sum);
}

function average(sum){
    console.log(sum/2);
}

//for each

let arr=[1,2,3,4,5];

arr.forEach(squre);
arr.forEach(display);


function display(element){
    console.log(element);
}

function squre(element,index,array){
    array[index]=element*element;
}

//map()

const num=[1,2,3,4,5];

const new_arr=num.map(squre);
console.log(new_arr);

function squre(element){
    return Math.pow(element,2);
}


//filter()

let num1=[1,2,3,4,5,6,7,8,9,10];

let even=num1.filter(iseven);
console.log(even);

function iseven(elements){
    return elements%2==0;
}
