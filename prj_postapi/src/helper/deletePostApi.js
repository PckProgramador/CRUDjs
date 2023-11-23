export function deletePostApi(url,id,callback){
    fetch(`${url}/${id}`,{method : "DELETE"})
    .then(response =>{
        if(response.ok){
            callback();
        }else{
            throw new Error("error fetching");
        }
    })
    .catch(error => console.log(error));
}