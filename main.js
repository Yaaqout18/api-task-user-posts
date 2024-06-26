function getPosts(userId){
  let request = new XMLHttpRequest();	
  request.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId='+userId);
  request.responseType ='json'
  request.send()
  request.onload = function(){
    if(request.status>= 200 && request.status< 300){
    let posts = request.response;
      document.getElementById('all-posts').innerHTML = ''
    for(post of posts){
      let content = `
      <div id="post">
      <h4>${post.title}</h4>
      <p>${post.body} </p>
    </div>
      `
      document.getElementById('all-posts').innerHTML += content
    }
    }else {
      alert('error')
    }
  }
}
getPosts()

// Get all users 

function getUsers(){
  let request = new XMLHttpRequest();	
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.responseType ='json'
  request.send()
  request.onload = function(){
    if(request.status>= 200 && request.status< 300){
    let users = request.response;
      document.getElementById('all-users').innerHTML = ''
    for(user of users){
      let content = `
      <div id="user" onClick='userClicked(${user.id}, this)'>
      <h3>* userName : ${user.username}</h3>
      <h5>* Name : ${user.name}</h5>
      <p>* Email : ${user.email}</p>
    </div>
      `
      document.getElementById('all-users').innerHTML += content
    }
    }else {
      alert('error')
    }
  }
}
getUsers()

function userClicked(id,el){
getPosts(id)
let selectedElements = document.getElementsByClassName("selected")
for(element of selectedElements){
  element.classList.remove("selected")
}
el.classList.add('selected')
}