// problem 01 

let sum = 0 
let i =1
while (i<= 5){
    sum +=i;
    i++;
}
// console.log(sum);


// problem 02 

let countdown =[]
let j = 5 ;
while (j>0){
   countdown.push(j) ;
   j--;

}
console.log(countdown

);
// problem 03 

let teaCollection =[]
let tea


do {
     tea =prompt(` Enter your favorite tea(type "stop" to finsih )`)
 
     if (tea !== "stop"){
        teaCollection.push(tea)
     }

} while (tea!==stop);

// prooblem 04

let total = 0 
let k=1;
do {
    total +=k;
    k++;
}while(k <= 3 );

// Problem 05 

let multipledNumber = []
let numbers =[2, 4, 6]


for ( let l=0; l <numbers.length; l++)
     {
    // takeNumber =numbers[l]*2 
    // multipledNumber.push(takeNumber)
    
    multipledNumber.push(numbers[l]*2)

     }
    // console.log(multipledNumber);


    //Problem 06 

    
    let city =["Paris", "New York", "Tokyo", "London"]

    let cityList =[]

    for (let c =0; c<city.length; i++ ) {
        const myCity = city[c];
        cityList.push(myCity);
        
    }