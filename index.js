function converter(){
var numero1 = parseFloat(document.getElementById("valor").value)
var select = document.querySelector('select')
var valor = select.value
var numero3 = document.getElementById("Euro")
var numero4 = document.getElementById("Libra")
var resultado = document.getElementById("resposta")

const calculo = numero1 * 5.90

resultado.innerHTML = calculo

}

