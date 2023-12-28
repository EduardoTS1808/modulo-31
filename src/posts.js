let _data  = {
    title: "teste de envio do eduardo",
    body: "texto do corpo(body), para presentacao ",
    userId: 1
}
let campo = document.getElementById('posts');
let postMarkup = '';
function setPosts( data){

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {
            'Content_Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => console.log(data))
    .catch(error => console.log(error))
}
function getPosts(){

    fetch('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content_Type' : 'application/json; charset=UTF-8'
        }
    })
    .then( response => response.json())
    .then( data => {
        data.map(function (post) {
            postMarkup += `
                <div>
                <h2> ${post.title} </h2>
                <p> ${post.body}</p>
                </div>
            `
        })
        campo.innerHTML = postMarkup;
        console.log(data)
    })
    .catch(error => console.log(error))
}
// setPosts()
// getPosts()