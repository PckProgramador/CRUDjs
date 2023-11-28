export function createPostApi(url,postData,callback){
    fetch(url,{
        method : "POST", 
        headers:{
            "content type" : "aplication/json",
            },
        body: JSON.stringify(postData),
    },
    )
    .then(response =>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error("error fetching");
        }
    })
    .then(callback)
    .catch(error => console.log(error));
}