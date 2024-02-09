const button = document.querySelector("#butao");
const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")

const mensagem = document.createElement('p')

function clearForm() {
    altura.value = ""
    peso.value = ""
}

button.addEventListener("click", function(event){
    event.preventDefault()

    // validacao

    if(altura.value.trim() === ""){
        mensagem.textContent = "*É obrigatório colocar a altura!!"
        altura.insertAdjacentElement("afterend", mensagem)
        mensagem.setAttribute("class", "erro")

        return false
    }

    if(peso.value.trim() === ""){
        mensagem.textContent = "*É obrigatório por o peso!!"
        peso.insertAdjacentElement("afterend", mensagem)
        mensagem.setAttribute("class", "erro")

        return false
    }

    // logica

    mensagem.classList.add("esconder")
    clearForm()
})


function calculo(){
    

    const metros = document.getElementById('altura').value;
    const kg = document.getElementById('peso').value;
    
    let imc = kg / (metros**2)

    const resul = document.querySelector('#h1')
    const re_peso = document.querySelector('#h2')
    const re_peso1 = document.querySelector('#h3')
    const re_peso2 = document.querySelector('#h4')
    const re_peso3 = document.querySelector('#h5')

    resul.innerHTML = "<h1> o resultado e:"+imc+"</h1>"
    
    console.log(resul)
    
    if (imc < 18.5){
        re_peso.innerHTML = "<h2> o seu peso e: Baixo</h2>"
    }
    
    else if ( 18.5 < imc < 25){
        re_peso1.innerHTML = "<h2> o seu peso e: normal</h2>"
    }
    
    else if ( 25 < imc < 30 ){
        re_peso2.innerHTML = "<h2> o seu peso e: sobrepeso</h2>"
    }

    else {
        re_peso3.innerHTML = "<h2> o seu peso e: obeso</h2>"
    }
}
