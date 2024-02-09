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

    resul.innerHTML = "<h1> o resultado e:"+imc+"</h1>"

    console.log(resul)
    return imc
}

