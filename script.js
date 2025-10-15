const calcular = document.getElementById("calcular");


function imc() {
    const nome = document.getElementById("nome");
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
    const resultado = document.getElementById("resultado");

    if (nome.value !== '' && !isNaN(parseFloat(altura.value)) && !isNaN(parseFloat(peso.value))) {
        imc = parseFloat(peso.value) / (parseFloat(altura.value**2))
        //imc = 30
        
        if(imc < 18.5){
            resultado.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)}. Você está abaixo do peso.`
            return
        }
        if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)}. Você está no peso ideal`
            return
        }
        if (imc >= 25 && imc <= 29.9) {
            resultado.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)}. Você está com sobrepeso`
            return
        }
        if (imc >= 30) {
            resultado.innerText = `${nome.value}, seu IMC é: ${imc.toFixed(1)}. Você está obeso`
            return
        }
    } else {
        resultado.innerText = "Preencha todos os campos com valores validos!"
    }
  
}

calcular.addEventListener("click", imc);
