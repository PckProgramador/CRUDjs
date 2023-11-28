// diferencia put y patch
// PUT me modifica todo el objeto de la api y
// PATCH permite modificar parte de la informacion de la api

function updatePostApi(url,updateData,callback){
    fetch(`${url}/${updateData.id}`, 
    {method:'PUT',
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(updateData)
    }).then(response=>{
        if(response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data)
    .catch(error=>console.log(error));
}