const apiKey = 'e9240a2f';
const formPesquisa = document.querySelector('form');

formPesquisa.onsubmit = (ev) =>{
    ev.preventDefault();

    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == ''){
        alert("Campo de pesquisa está vazio!")
        return;
    }
    fetch(` http://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(json => carregarLista(json))
}

const carregarLista = (json) =>{
    const lista = document.querySelector('ul.lista');
    lista.innerHTML = "";

    json.Search.forEach(element => {
   

        let item = document.createElement("li");

        item.classList.add("item");
        item.innerHTML = `
        <div  >
        <img src="${element.Poster}" class="imagem-filme" alt="image do filme"/>
        <div class="context" > 
        <h4>${element.Title}</h4> <p> ${element.Year}</p>
        <p>  ${element.Type}</p>
        </div>
        </div>

        `;
        lista.appendChild(item)

    });
  
 
}