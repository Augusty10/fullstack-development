// OOP (object - Oriented Programing ) - Encapsulation , inheritance , Polymorphism and Abstraction .


let Car = {
    make: " Toyota ",
    model: "Camry ",
    year: 2020,
   
    start: function(){
        return `${this.make} car got started in ${this.year}` ;
    },

};
console.log(Car.start());

