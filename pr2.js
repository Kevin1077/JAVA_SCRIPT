// nested objects

const person = {
    fullname: {
        firstname: 'John',
        lastname: 'Doe'
    },
    age: 25
}

console.log(person.fullname.firstname); // John
console.log(person.fullname.lastname); // Doe


//array of objects

const fruits = [{name : "apple",color : "red",calories : 200},
                 {name : "orange",color : "orange",calories : 100},
                 {name : "grape",color : "green",calories : 10}

];

const lowcal=fruits.filter(fruits => fruits.calories<150)
console.log(lowcal);

console.log(fruits[0].name);
fruits.push({name: "mango",color : "yellow",calaories : 10})
console.log(fruits[3].name);
fruits.pop();
console.log(fruits);

//sort

let car = ["bMW","audi","ferari"]

console.log(car.sort())

let numbers = [1,10,3,2,7,5];

numbers.sort((a,b) => a-b);

console.log(numbers)

fruits.sort((a,b) =>a.name.localeCompare(b.name));
console.log(fruits);

//date objects
//Date(year,month,day,hours,minutes,seconds,milliseconds)
let date = new Date(2021,0,1,12,0,0,0);
console.log(date);

let today = new Date();
console.log(today);

const year=date.getFullYear();
console.log(year);

date.setFullYear(2022);
console.log(date);

//closure is a function defined in another function

function inner(){
    string = "hello world";
    function outer(){
        console.log(string);
    }
    outer();
}

inner()
