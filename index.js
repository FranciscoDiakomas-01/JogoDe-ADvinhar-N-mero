window.onload = function () {
    let btn = document.querySelectorAll("button") 
    let entrada = document.getElementById("entrada")
    entrada.textContent = ""
    btn.forEach((botton)=>{
    botton.addEventListener("click",(e)=>{
        if(botton.classList.contains("number")){
            entrada.textContent += e.target.textContent
        }
        let jogar = document.getElementById("jogarbtn")
        jogar.addEventListener("click",()=>{
        let num = entrada.textContent
        let numGerado = Math.floor(Math.random()*10)
        let resposta = document.getElementById("resposta")
        let spinner = document.getElementById("spinner")
        spinner.style.display = "flex"
        setTimeout(()=>{
            spinner.style.display = "none"
            if(num == numGerado){
            resposta.textContent =`Parabéns o número gerado foi ${numGerado}`
            resposta.style.backgroundColor = "green"
            resposta.style.color = "white"
            resposta.style.width = "400px"
            resposta.style.display = "flex"
            resposta.style.borderRadius = "10px"
            resposta.style.height = "50px"
            resposta.style.justifyContent= "center"
            resposta.style.alignItems = "center"

        }else{
            resposta.textContent =`Error o número gerado foi ${numGerado}`
            resposta.style.color = "white"
            resposta.style.backgroundColor = "red"
            resposta.style.width = "400px"
            resposta.style.display = "flex"
            resposta.style.borderRadius = "10px"
            resposta.style.height = "50px"
            resposta.style.justifyContent= "center"
            resposta.style.alignItems = "center"
        }
        },1000)
        
    })

    let recomecar = document.getElementById("recomecarbtn")
    recomecar.addEventListener("click",()=>{
        let resposta = document.getElementById("resposta")
        entrada.textContent = ""
        resposta.textContent =""
        
    })   
    })
    })    
}