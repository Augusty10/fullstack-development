// OOP (object - Oriented Programing ) - Encapsulation , inheritance , Polymorphism and Abstraction .


let Car = {
    make: " Toyota ",
    model: "Camry ",
    year: 2020,
   
    start: function(){
        return `${this.make} car got started in ${this.year}` ;
    },

};

// console.log(Car.start());

function Person (name, age){
        this.name = name 
        this.age = age 
}

let join = new Person("jhon", 20)



// proto typeyl Chain 

function Animal (type ){
    this.type = type$
}
Animal.prototype.speak= function(){
    return ` ${this.type} makes a sound `
 }
 Array.prototype.hitesh = function (){
    return ` Custom method ${this}`
 }

 let myArray = [1,2,3] ;
 console.log(myArray.hitesh);
 

 //  class 
 class  Vehicle {
       constructor(make, model){
        this.make = make 
        this.model = model
       }
 start (){
    return `${this.make }is a car ${this.make}`;
 }
 }

 // class inheritance 

 class Car extends Vehicle{
     drive(){
        return `${this.make} : this is an inheritance example `;
     }
 }

 let myCar = new Car ("Toyota" , " Corrola ")
//  console.log(myCar.start());
//  console.log(myCar.drive());

let vehOne =  new Vehicle("Toyoto", "Corrolla");
console.log(vehOne.make);



// Encapsulation 

class BankAccount {
    #balance = 0;

    deposit(amount){
               this.#balance += amount;
               return this.#balance;
    }
   getBalance(){
    return `$ ${this.#balance
    }`;

   }
}

let account = new BankAccount();
// console.log(account.getBalance);

// Abstraction 

class CoffeMachine {
    start(){
        // call DB 
        // filter value 
        return `Starting the Machine ...`
    }
 brewCofee (){
    // complex calculation 
    return `Brewing cofee`;
 }

pressStartButton(){
     let msg1 =this.start();
     let msg2 = this.brewCofee();
    return ` ${msg1}+ ${msg2}`;
    }
}

let myMachine = new CoffeMachine
console.log(myMachine.start());
console.log(myMachine.brewCofee());



// Polymorphism 

class Bird {
    fly(){
        return `Flyig....`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly `;
    }
}
 

let bird = new Bird ()
let penguin = new Penguin ()
console.log(Bird.fly());
console.log(penguin.fly());

// Sattic 

class Calculator {

    static add (a,b ){
        return a+b 
    }
}

// let miniCalc = new Calculator();
// {
//     console.log(miniCalc.add(2,3));
    
// }

console.log(Calculator.add(2,3));

// Getter  and Setters

class Employee{
    constructor(name, salary){
        this.name= name 
        this._salary = salary 
    }
 get salary(){
    return this._salary;

 }

 set salary(value){
    if(value < 0){
        console.error(" invalid Salalry ")
    }else {
        this._salary = value ; 
    }
 }
}


let emp = new Employee("Alice ", 50000)
console.log(emp.salary);







