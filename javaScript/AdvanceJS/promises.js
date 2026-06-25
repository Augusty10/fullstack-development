function fetchData(){
    return new Promise((resolve , reject ) =>{
        setTimeout(() =>{
            let success = true ;
            if(success){
                resolve("Data fecthed successfully ")
            }

        }, 3000)
    })

}
fetchData()
    .then( (data)=> console.log(data))
    .catch((error)=>console.error(error))
    