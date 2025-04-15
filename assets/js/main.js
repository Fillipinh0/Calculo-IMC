const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e);
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const calcImc = (peso / ( altura * altura)).toFixed(2);
  
  if(calcImc < 18.5) 
  {
    resultado.innerHTML = `<p>Seu imc e ${calcImc} e voce esta abaixo do peso</p>`;
    resultado.className = "bad";
  }
  else if(calcImc < 24.99) 
  {
    resultado.innerHTML = `<p>Seu imc e ${calcImc} e voce esta no peso ideal
    </p>`;
    resultado.className = "paragrafo-resultado";
  }
  else
  {
    resultado.innerHTML = `<p>Seu imc e ${calcImc} e voce esta acima do peso</p>`;
    resultado.className = "bad";
  }
  
});