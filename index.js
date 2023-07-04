const postListDom = document.querySelector(".post-list");
console.log(postListDom);
const postUI = (posts) => {
  let result = "";
  posts.forEach((post) => {
    result += `
    <li class="post-item">
      <div class="post-body">
        <span class="post-id">Post Id <b>${post.id}</b></span>
        <strong class="post-title">${post.title}</strong>
        <p class="post-content">${post.body}</p>
      </div>
      <button class="post-button">Read More</button>
    </li>`;
    postListDom.innerHTML = result;
  });
};
//!Ajax
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.onload = function () {
// const response = xhr.responseText;
//const data = JSON.parse(response);
//postUI(data);
//};
//!Fetch
//xhr.send();
// fetch("https://jsonplaceholder.typicode.com/posts")
 // .then((response) => response.json())
//  .then((data) => postUI(data))
 // .catch((error) => console.log(error));

 //!Async // Await

 /* const getData = async() =>{
    const resolve = await fetch ("https://jsonplaceholder.typicode.com/posts");
   const data =await resolve.json();
   postUI(data)
 }
 getData();
 */
//! Async & Await tekrar

const getData = async() =>{
    const resolve = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =await resolve.json();
    postUI(data)
}
window.addEventListener("DOMContentLoaded", ()=>{
    getData();
});

