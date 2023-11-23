let divPost= "";

/**
 * 
 * @param {HTMLDivElement} elemento 
 * @param {<post>Object} posts 
 */
export const renderPost =(element, posts)=>{
    posts.forEach(post =>{
        divPost+=
        `<div class="card mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.post}</p>
          <a href="#" class="btn btn-primary">Edit post</a>
          <a href="#" class="btn btn-primary">Delete post</a>
        </div>
      </div>`
    });
    element.innerHTML=divPost;   
}