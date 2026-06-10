// Primitive

// 7 types : String , Number , Boolean , null , undefined  , Symbol 
//    BigInt , 

const Score = 100
const ScroewValue = 100.3 
const isLoggedIn = false 
const outsidetemp = null
let userEmail;    //undefined 

const id=Symbol('123')

const anotherId = Symbol('123')

// const bignumber= 32151515151511151


// 02 . refrence Type (Non-primitive )
// Array , Objects , Functions 

const heros =["Superman ", "Naagraj ","Shaktiman ", "Doga"];

let myOBJ={
    name:raj,
    age:22,
}


const myFunction =function(){
    console.log(" hello world ");
    
}

console.log(typeof myFunction);



// stack(Primitive ) and Heap Memory  (Non - primiitve )

let myYoutubeName = "HiteshChoudhry"

let anothername = myYoutubeName
anothername = "chaiaurCode"

console.log(anothername);
console.log(myYoutubeName);


let user ={
    email: "user@google.com",
    upi:"user@ybl"
}

let userTwo = user
userTwo.email="myname@gmail.com";
console.log(user.email);
console.log(userTwo);

