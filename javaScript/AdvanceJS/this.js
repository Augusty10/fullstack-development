const person ={
    name: "Hitesh ",
    greet(){
        console.log(`Hi Im ${this.name}`);
    },

};

person.greet();

const greetFunction = person.greet
greetFunction()

const boundgreet = person.greet.bind( {name: "jhon"})


// bind , call and Apply 
