var cardNumber = prompt('Digite os números do seu cartão').split('').reverse();
var multiply2 = 0;
var sumMultiply = 0;
var sum = 0;
var sumTotal = 0;

function isValidCard(num) {
  if (num == '') {
    alert('Por favor, insira apenas números');
    return;
  }
  for (i = 0; i < num.length; i++) {
    if (i % 2 === 1) {
      multiply2 = parseInt(num[i]) * 2;
      if (multiply2 > 9) {
        multiply2 -= 9;
      }
      sumMultiply += multiply2;
    } else {
      var n = parseInt(num[i]);
      sum = sum + n;
    }
  }
  sumTotal = sum + sumMultiply;
  if (sumTotal % 10 === 0) {
    return document.getElementById('msgValidation').innerHTML = 'Seu cartão é válido';
  } else {
    return document.getElementById('msgValidation').innerHTML = 'Seu cartão é inválido';
  }
}
isValidCard(cardNumber);