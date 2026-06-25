function fetchUserData(){
    return new Promise((resolve , reject)=> {
        setTimeout(()=> {
        resolve({name:"Chaiode", url:"https://dhanrajsahu.com" })
        }, 3000);
    })

}

async function getUserData() {
    try {
        console.log('fetvhing user Data ...');
        const   userData =await fetchUserData()
        console.log("User Data: ", userData);
        
    } catch (error) {
        console.log("Error fetching Data", error);
    }
}