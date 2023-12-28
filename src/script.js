const url = 'https://api.github.com/users';
const urlFilmes = 'adc85fe3a184b2deefbfed44b7c6dd67';
const respost = document.getElementById('resposta');

// fetch(`${url}/${user}`)
// .then((response) => response.json())
// .then((data) => {
//     resposta.innerHTML  = `${data.name}  possui ${data.public_repos} repositórios públicos no github como ${data.login}`
// })
// .catch((error) => console.log('Erro: ', error.mensage || error))



// vamos pegar o um usuario dinâmico por um input


// transformo  método acima em uma função.



function getUser (user){
    
fetch(`${url}/${user}`)
.then((response) => response.json())
.then((data) => {
    respost.innerHTML  = `${data.name}  possui ${data.public_repos} repositórios públicos no github como ${data.login}`
})
.catch((error) => console.log('Erro: ', error.mensage || error))


}

function getFilmes (){
    
fetch(`${urlFilmes}/`)
.then((response) => response.json())
.then((data) => {
    respost.innerHTML  = `${data}`
})
.catch((error) => console.log('erro: ', error.mensage || error))


}
getFilmes()




const userInput = document.getElementById('username')

userInput.addEventListener
( 'focusout', function(event){
    getUser(event.target.value)
})


function maisUsers (){
    fetch(`${url}/cavalcantemmarcelo`)
    .then((response) => response.json())
    .then((data) => {
        respost.innerHTML  = `${data.name}  possui ${data.public_repos} repositórios públicos no github como ${data.login}`
    })
    .catch((error) => console.log('Erro: ', error.mensage || error))
}
// maisUsers();