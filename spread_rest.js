
// spread operator ...

let num=[1,2,3,4,5];

let maxnum = Math.max(...num);
console.log(maxnum);

let fruits = ['apple','banana','mango'];
let new_fruits = ['orange','grapes',...fruits];
console.log(new_fruits);

let username="kevin";
let new_username = [...username];
console.log(new_username);

//rest operator ...(rest parameter)

function fridge(...foods){
    console.log(foods);
}


let food1="pizza";
let food2="burger";
let food3="pasta";
let food4="noodles";

fridge(food1,food2,food3,food4);
// spread operator ...

let num=[1,2,3,4,5];

let maxnum = Math.max(...num);
console.log(maxnum);

let fruits = ['apple','banana','mango'];
let new_fruits = ['orange','grapes',...fruits];
console.log(new_fruits);

let username="kevin";
let new_username = [...username];
console.log(new_username);
