// // cria um cookie
// document.cookie = "username=Caio;"
// // data de inspitacao
// document.cookie = "username=Caio; expires=Thu, 14 Dec 2034 12:00:00 UTC";
// // local onde o cookie e salvo
// document.cookie = "username2=Jose; expires=Thu, 14 Dec 2034 12:00:00 UTC path=/";

// coloca algo na secao local
// localStorage.setItem('nome','Juninho')

// let nome = "Bebe"
// localStorage.setItem('nome2',nome)

// // seleciona o nome
// console.log(localStorage.getItem('nome'))

// // remove o item
// localStorage.removeItem('nome2')

// // limpa tudo
// localStorage.clear()

// lista na variavel nome
let nome = ["Bebe", 'carol', 'perry']
// cria uma variavel e transforma a lista em string
let nomeJason = JSON.stringify(nome)
// guarda os nomes convertidos no local storage 
localStorage.setItem('nome', nomeJason)

const nomes = JSON.parse(localStorage.getItem(nomeJason))





