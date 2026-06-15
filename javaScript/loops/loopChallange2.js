// Challange 02 

let cities = ["London ", "New York", "Paris ", "Berlin " ];
let visitedCities =[]

for( let i =0; i<cities.length ; i++){
    if(cities[i]==='Paris'){
        continue;
    }
    visitedCities.push(cities[i] )
}
// console.log(visitedCities);

// challange 03  - for of loop 

let numbers = [1,2,3,4,5]
let smallNumber =[]

for (const num of numbers) {
    if (num===4){
        break;
    }
    smallNumber.push(num)
}
// console.log(smallNumber);

// Challange no. 04 - for off loop 

let teaType = ["Chai", "green tea", "herbal tea", "black tea"];
let preferredteas= []

for (const tea of teaType) {
    if (tea ==="herbal tea ") {
        continue;
        
    }
    preferredteas.push(tea)
}



// challange 05 
let citiesPopulaton = {
"London":  890000,
"New York0":840000,
"Paris": 2200000,
"Berlin": 350000
};
let cityPopulation = {};
 for (const City  in citiesPopulaton) {
    
 }


// call , bind , apply 

// Object.keys(citiesPopulaton);
// console.log(cityPopulation);


//  Solution no . 06 

let worldcities = {
    Sydney : 500000,
    Tokyo : 900000,
    Berlin:3500000,
    Paris:2200000,

};
let largeCities = {}

for (const city in worldcities){
   if(worldcities[city] < 300000){
    continue
   }
   largeCities[city]=worldcities[key];
}


// for-Each 

let teaCollection = ["earl gray ", "green tea ", "chai ", "oolong Tea"];
let availableTeas = []

teaCollection.forEach(function (tea)
{
  if (tea === 'chai'){
    return ; 
  }
  availableTeas.push(tea);
}
);

console.log(availableTeas);

//
 let myWorldCities = ["Berlin ", " Tokyo ", "Sydney ", "Paris"];
let traveldCities = []

myWorldCities.forEach(city => {
    if(city==='sydney'){
        return
    }
    traveldCities.push(city);
    
});

// 
let Mynumbers = [2,5,7,9];
let doubledNumber = []

for (let i =0; i<Mynumbers.length; i++ ){
    if (numbers[i] === 7 ){
        continue
    }
    doubledNumber.push(numbers[i] *2);


}


// 10.

let myTeas  = ["chai ", "green tea ", " black tea ", "jasmine  tea ", "herbal tea "]
let shortteas = []

for (const tea of myTeas){
      if(tea.length > 10){
        break
      }
      shortteas.push(tea);
}



    





