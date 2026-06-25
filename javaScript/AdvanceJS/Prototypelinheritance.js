function Person (name){
    this.name = name 
}

Person.prototype.greet=function(){
    console.log(`hello My name is ${this.name}`);
}

let hitesh = new Person("hites ")
hitesh.greet();
[[Prototype]]