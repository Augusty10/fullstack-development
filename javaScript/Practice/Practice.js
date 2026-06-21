class Vehicle {
    constructor(make, model ){
      this.make= make;
      this.model=model;
    }
    getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

}
class car extends Vehicle{
 startEngine(){
        return ` Engine Started `;
    }
}