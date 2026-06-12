// Object ko do tarh se declare karte hai .
//  Singleton . =>  for constructor 
//  Object.create
 
// literal =>  

    // Object literlaas 


    const mySym  = Symbol("key1")

    const jsUser ={
             name: "Hitesh ",
             "fullname":"Hitesh Chodhray ",
             [mySym]:"mykey1",          // symbol
             age: 18,
             location: "jaipur",
             email: " Hitesh@google.com",
             isLoggedIn: false,
             lastLoginDays: ["Monday", "Saturday"]
    }


//access value 
// console.log(jsUser.email);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mySym]);

// values change 

jsUser.email="raj@sahu";
// Object.freeze(jsUser)   


// 

jsUser.greeting= function (params) {
    console.log("Hello JS user");
    
}

console.log(jsUser.greeting());



