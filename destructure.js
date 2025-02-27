// getter and setter

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }

    set width(newwidth){
        if(newwidth >0){
            this._width = newwidth;
        }
        else{
            console.log("Invalid width");
        }
    }

    get width(){
        return this._width;
    }
}

const rectangle=new Rectangle(10,20);

console.log(rectangle.width);
console.log(rectangle.area);
rectangle.width='pizza';

//destructuring

let a=10;
let b=20;

[a,b]=[b,a];

console.log(a,b);

let colors = ['red','green','blue'];

[colors[0],colors[1]]=[colors[1],colors[0]];

console.log(colors);

const person1 = {
    firstname : "John",
    lastname : "Doe"

}

function displayperson({firstname,lastname}){
    console.log(firstname)
    console.log(lastname)
}

displayperson(person1);


