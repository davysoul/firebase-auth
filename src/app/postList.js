
const postsList = document.querySelector('.posts')

export const setupPosts = (data)=>{
    let html = ''
  if(data.length){
    data.forEach(doc => {
        const post = doc.data()
        console.log(post)
        const li = `
          <li class ='list-group-item list-group-item-action mt-3'>
            <h5>${post.title}</h5>
            <p>${post.content}</p>
          </li>
        `
        html += li
    });
    postsList.innerHTML = html
  }else{
    postsList.innerHTML ='<h1>Login to see the posts</h1>'
  }
}