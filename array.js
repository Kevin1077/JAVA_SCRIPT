let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

fruits.push('grapes');
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();

console.log(fruits);

console.log(fruits.length);

for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log(fruits[2]);

for(let fruit of fruits){
    console.log(fruit); 
}

fruits.sort();
console.log(fruits);
//to reverse the array add reverse method
