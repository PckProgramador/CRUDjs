export function getPostApi(url,callback){
    fetch(url)
    .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error("Error fetching");
            }
        }
    ).then(data => callback(data))
    .catch(err => console.log("Error fetching"));
}