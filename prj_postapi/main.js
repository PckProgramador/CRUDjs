import { renderPost } from "./src/components/renderPost";
import { getPostApi } from "./src/helper/getPostApi";
import { createPostApi } from "./src/helper/createPostApi";
import { deletePostApi } from "./src/helper/deletePostApi";
//Objetos del DOM
let postData=[];
const postLists=document.querySelector(".posts-list");
const addPostForm=document.querySelector(".add-post-form");
const titlePost=document.querySelector("#title-post");
const contentPost=document.querySelector("#content-post");
const URL="http://localhost:4000/post";
function init(){
  // GET all the posts
  getPostApi("http://localhost:4000/post",(data)=>renderPost(postLists,data));
}


postLists.addEventListener("click",e=>{
  e.preventDefault();
  let btnpress=e.target.id=="edit-post";
  let btnpress2=e.target.id=="delete-post";
  const dataid=e.target.parentElement.dataset.id;
  const card= e.target.closest(".card");
  if(btnpress){

  }

  if(btnpress2){
    deletePostApi(URL,dataid,()=>
    {
      card.remove();
    })
  }
})


addPostForm.addEventListener("submit",e=>{
  e.preventDefault();
  const bonton = e.target.querySelector(".btn");
  if(!(titlePost.value && contentPost.value)){
    alert("los campos estan vacios");
  }
  postData = {
    title : titlePost.value,
    post : contentPost.value,
  };

  createPostApi(URL,postData,(data)=>{
    const arrayPost=[];
    arrayPost.push(data);
    renderPost(postLists,arrayPost);
  })
})





//-------------------------INICIO DE LA APLICACION------------------------------
document.addEventListener('DOMContentLoaded',init);