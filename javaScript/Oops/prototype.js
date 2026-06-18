let computer ={
    cpu: 12

}

let lenovo ={
    screen: "HD ",
    __proto__:computer

}


let tomHardware ={

}

// console.log(`computer `, computer.__proto__);


let genricCar = {
    tyres:4
}

let tesla ={
    driver: "Ai"
}

Object.setPrototypeOf(tesla, genricCar)

// console.log(`generic Car ` ,tesla.tyres);
console.log(`tesla `, Object.getPrototypeOf(tesla));



