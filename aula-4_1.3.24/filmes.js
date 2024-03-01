const listaFilmes = document.querySelector('#listaFilmes')

const filme_input = document.querySelector('#filmeInput').value
const btn = document.querySelector('button')

// const filmes = ['as branquelas', 'simpson: o filme', 'persejackson', 'avatar', 'jumper']
const filmes = [{
    nome: 'Harry Potter',
    lancamento: 2001,
    genero: 'fantasia',
    atores: {
        ator1: 'daniel radcliff'
    }
},{
    nome: 'gente grande',
    lancamento: 2004,
    genero: 'comedia',
}]


// filmes.push('gente grande') // adiciona algo na lista
// filmes.pop() // remove o ultomo elemento da lista

// btn.addEventListener('click', ()=>{
//     let filme_digitado = filme_input.value
//     filmes.push(filme_digitado)
// })


// window.onload = function carregar_filmes (){}
window.onload = () => { 
    for(let i=0; i< filmes.length; i++){
        let lista = document.createElement('li') // cria um elemento
        listaFilmes.append(lista)
        lista.inAno.innerHTML = filmes[i].lancamento // pega os dados especificos

        let listaAno = document.createElement('li') // cria um elemento
        lista.append(listaAno) // adiciona as coisas em uma lista ja criada
        listaAno.innerHTML = `o ano de lancameno é: ${filmes[i].lancamento}` // pega os dados especificos
    }
} // fucao igual a anterior, so que menor


// filmes.forEach((meuElemento) =>{
//      console.log(meuElemento.nome + 'vai bb')
// })