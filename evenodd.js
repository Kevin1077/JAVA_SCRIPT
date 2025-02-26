function evenorodd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

let num=window.prompt("Enter a number");
num=Number(num);
let result=evenorodd(num);
console.log(`The number ${num} is ${result}`);
