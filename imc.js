let peso = parseFloat(prompt("Informe o seu peso: "));
let altura = parseFloat(prompt("Informe a sua altura"));

let imc = parseFloat(peso / (altura * altura));

alert("O seu imc é: " + imc.toFixed(2));