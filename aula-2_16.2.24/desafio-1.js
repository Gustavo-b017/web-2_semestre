// livros de 22 por 15, desde que leve 7

/* 
pegar dados - ok
selecionar dados - ok
mover os dados - ok
operacionar os dados - ok 
mostrar o valor - 
retornar um valor -
fim
*/ 
const user = () => {
    let livros = document.querySelector("#num").value

    return livros
}

const cal = nLivros => {
    if (nLivros >= 7){
        return nLivros * 15
    }

    else {
        return nLivros * 22
    }
}

const main = () => {
    let books = user()
    let calculo = cal()
    
    console.log(`O preco final e ${calculo}, levando ${books}`)
}


button.addEventListener("click", function(event){
    event.preventDefault()
  return main ()  
})