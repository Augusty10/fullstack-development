function fetchPostData(){
       return new  Promise((resolve )=> {
        setTimeout(()=> {
               resolve("Post data fetched ")
        }, 2000);
       } )

}

function fetchCommentData (){

      return new  Promise((resolve )=> {
        setTimeout(()=> {
               resolve("Comment data fetched Succefully.")
        }, 2000);
       } )
}

async function getBlogData () {
    try {
        console.log(" Fetching Blog Data ");
        const blogData = await fetchPostData()
        const  commentData = await fetchCommentData()
        console.log("fetch complete ");
    } catch (error) {
        console.log("Error fetchenig blog data", error);
        
    }
    
}