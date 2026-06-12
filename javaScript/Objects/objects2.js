const tinderUser = new Object ()      // singlten user 

tinderUser.id="123abc" 
tinderUser.name="sammy"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

const regularuser ={
    email: "some@gmailai.com",
    fullname:{
        userfullName:{
            firstname:"hitesh",
            lastname:"chodhary"
        }
    }
}

// console.log(regularuser.fullname.userfullName);

const objA ={
    1:"a",
    2:"b",

}

const objB ={
    3:"a",
    4:"b",
    
}

// const obj3 = objA.concat(objB)
// const obj4 = Object.assign( {},objA,objB)

const obj3 ={...objA, ...objB}     // Sprad oprator 

// console.log(obj3);


const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    }
]


users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoogedIn'));








