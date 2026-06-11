/*
01. Declar an array named 'teaFlavors' that containes the strings "Green tea " , and "ollang  tea. "
 Access the first element of the array and stroe it in a variable named  `firstTea`. 
*/

let teaFlavors = ["green tea ", "black tea ", "oolong tea"] 
 const firstTea =teaFlavors[0]

//  console.log(firstTea);
 

/* 
 Declare an array named `cities` containning  " London ", "Tokyo " , "paris " and " New York " Access the thierd element in the array and store it in variable named 'favoritcity'. 

*/

let cities = ["London ", " Tokyo ", "paris ", "New York"]

let favoritcity = cities[3];

// console.log(favoritcity);

//  solution no 03 

let teatypes= [" herbal tea " , " White tea ", " Masala Chai "]
//  console.log(teatypes);
 
teatypes [2] =" jasmine tea"

// console.log(teatypes);

// solution No. 04 


let cityVisited = [" Mumbai " ,"Sydney"]

cityVisited.push="Berlin";

// console.log(cityVisited);

// Solution No 05 

let teaOrders = [   "chai ", "iced tea " , "matcha ", "earl grey "]

let lastorder = teaOrders.pop();

// console.log(lastorder);

// Solution no 06 

let populerTeas = ["green tea", "oolong tea ", " chai "]

let softCopyTeas=populerTeas 
// console.log(softCopyTeas);

// solutions no . 7 

let topCities = ["berlin ", " Singapore ", " New York "]

let hardCopyCities = [...topCities] ;      // hardCopy 
// console.log(hardCopyCities);



// Solution no. 08 

europeanCities = ["Paris ", "Rome "];
AsianCities = ["Tokyo ", " bangkock "]

worldCities = europeanCities.concat (AsianCities) ;

console.log(worldCities);


// solution no.9 

let teaMenu=[" Masala chai", " oolong tea", "green tea ", "earl grey"]

 let menulength =teaMenu.length;


 // Solution 10 

 let cityBucketlist =["Kyoto " , "London", "Cape Town " , "VenCouer "]


 let isLondoninList = cityBucketlist.includes("London")