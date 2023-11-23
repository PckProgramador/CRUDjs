import { renderPost } from "./src/components/renderPost";
import { getPostApi } from "./src/helper/getPostApi";
import { createPostApi } from "./src/helper/createPostApi";
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

addPostForm.addEventListener("submit",e=>{
  e.preventDefault();
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