let divPost= " ";

/**
 * 
 * @param {HTMLDivElement} elemento 
 * @param {<post>Object} posts 
 */
export const renderPost =(element, posts)=>{
    posts.forEach(post =>{
        divPost+=
        `<div class="card mx-2" style="width: 18rem;">
        <div class="card-body" id=${post.id}}>
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.post}</p>
          <a href="#" id="edit-post" class="btn btn-primary">Edit post</a>
          <a href="#"  id="delete-post" class="btn btn-primary">Delete post</a>
        </div>
      </div>`
    });
    element.innerHTML=divPost;   
}