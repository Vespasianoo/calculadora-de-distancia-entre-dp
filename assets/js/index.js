function Calculate() {
    let valueXb = parseInt(document.getElementById("valueXb").value)
    let valueXa = parseInt(document.getElementById("valueXa").value)
    
    let valueYb = parseInt(document.getElementById("valueYb").value)
    let valueYa = parseInt(document.getElementById("valueYa").value)

    let X = valueXb - valueXa
    let Y = valueYb - valueYa

    let calcularPotenciaX = X**2
    let calcularPotenciaY = Y**2

    let produtoXY =  calcularPotenciaX + calcularPotenciaY

    let produtoFinal = Math.sqrt(produtoXY).toFixed(2)

    document.getElementById("result").innerHTML = `O resultado é: ${produtoFinal}`
}

/*
function Clean() {
    valueXb.value="";
    valueXa.value="";
    valueYb.value="";
    valueYa.value="";

    document.getElementById("result").innerHTML = ""
}
*/



 
const btnCalcular = document.getElementById("calcular")
const btnLimpar = document.getElementById("limpar")

function Clean() {

    document.getElementById("result").innerHTML = ""
}

btnCalcular.addEventListener("click", (evento) =>{
    evento.preventDefault();

    Calculate()
})

function Clean() {
    document.getElementById("result").innerHTML = ""
}
  
limpar.addEventListener("click", () => {
    Clean()
})

