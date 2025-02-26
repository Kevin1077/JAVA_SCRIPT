//object and this keyword

const footballplayer1 = {
    firstname : "lionel",
    lastname : "messi",
    age : 34,
    club : "barca",
    hello : function(){
        console.log(`Hi I am ${this.firstname} ${this.lastname}`);
    }
}

const footballplayer2 = {
    firstname : "Cristiano",
    lastname : "Ronaldo",
    age : 36,
    club : "real",
}

console.log(footballplayer1.firstname+" "+footballplayer1.lastname+" is "+footballplayer1.age+" years old who plays for "+footballplayer1.club);
console.log(footballplayer2.firstname+" "+footballplayer2.lastname+" is "+footballplayer2.age+" years old who plays for "+footballplayer2.club);
footballplayer1.hello();


//constructor


function Car(name, model, year){
    this.name = name,
    this.model = model,
    this.year = year
    this.drive = function(){
        console.log(`I am driving ${this.name} ${this.model}`);
    }
}

const car = new Car("BMW", "X5", 2021);
const car2 = new Car("Audi", "A8", 2020);
console.log(car.name);
console.log(car.model);
console.log(car.year);
console.log(car2);
car.drive();
car2.drive();

