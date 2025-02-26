
//class
class product{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }

    display(){
        console.log(`Name: ${this.name} Price: ${this.price}`);
    }
}

const prod1 = new product("Shirt",100);
const prod2=new product("Pant",200);
prod1.display();
prod2.display();

//static

class math{
    static  pi = 3.149;

    static add(a,b){
        let sum = a+b;
        return sum;
        
    }
}

//no need to create object to access static variable

console.log(math.pi);
console.log(math.add(10,20));

class user{
    static user_count=0;

    constructor(user_name){
        this.user_name=user_name;
        user.user_count++;
    }

    static getUserCount(){
        return user.user_count;
    }

}

const user1=new user("John");

console.log(user1.user_name);
console.log(user.user_count);
console.log(user.getUserCount());

// inheritance

class Animal{
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Lion extends Animal{
    name="Lion";
}

const lion = new Lion();
lion.eat();

//super

class Animal1{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    move(){
        console.log(`${this.name} is moving`);
    }

}

class rabit extends Animal1{
    constructor(name,age){
        super(name,age);
        super.move();
       
    }
}

class fish extends Animal1{
    constructor(name,age){
        super(name,age);
       
    }
}

const rabbit1 = new rabit("bruno",2);
const fish1 = new fish("memo",1);
console.log(rabbit1.name);
console.log(fish1.name);
console.log(rabbit1.move());
