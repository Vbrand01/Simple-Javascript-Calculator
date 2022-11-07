// // DEFININDO CORES PELO JS (.CSS)
// $("#title").css("color","blue");
//  $("#title2").css("color","red");
//  $("#title3").css("color", "green");
//  $("#title4").css("color", "orange");


// JAVASCRIPT

let btoMaisJS = document.getElementById("btoJSMais").addEventListener("click", () =>{

    let primeiroValor = document.getElementById("valorOne").value
    let segundoValor = document.getElementById("valorTwo").value

    soma = parseInt(primeiroValor) + parseInt(segundoValor)

    let resultado = document.getElementById("result").value=soma

})

let btoMenosJS = document.getElementById("btoJSMenos").addEventListener("click", ()=>{

    let primeiroValor = document.getElementById("valorOne").value
    let segundoValor = document.getElementById("valorTwo").value

    soma = parseInt(primeiroValor) - parseInt(segundoValor)

    let resultado = document.getElementById("result").value=soma

})

let btoJSMultipli = document.getElementById("btoJSMultipli").addEventListener("click", ()=>{

    let primeiroValor = document.getElementById("valorOne").value
    let segundoValor = document.getElementById("valorTwo").value

    soma = parseInt(primeiroValor) * parseInt(segundoValor)

    let resultado = document.getElementById("result").value=soma

})

let btoDiviJS = document.getElementById("btoJSDivi").addEventListener("click", () =>{

    let v1 = document.getElementById("valorOne").value
    let v2 = document.getElementById("valorTwo").value

    soma = parseInt(v1) / parseInt(v2);

    let resultado = document.getElementById("result").value=soma
})

//























