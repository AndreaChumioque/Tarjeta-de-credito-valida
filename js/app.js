//Creación de una función para validar tarjetas de crédito mediante algoritmo Luhn

function isValidCard(creditCard) {
  //Creación de un array evenDigits en el que se introducirán los dígitos pares contando de derecha a izquierda
  var evenDigits = [];
  //Creación de un array oddDigits en el que se introducirán los dígitos impares  contando de derecha a
  var oddDigits = [];
  //Creación de una variable sum para almacenar la suma de los dígitos
  var sum = 0;

  //Recorrido de los digitos pares del string creditCard
  //El contador inicia en el segundo dígito desde la derecha, si es mayor o igual que cero, entra al bucle
  for (var i = creditCard.length - 2; i >= 0; i - 2) {
    //Según el algoritmo, los dígitos pares se multiplican por 2
    if(creditCard * 2 > 9)
    //Si el resultado es mayor que 9, se le resta 9 y entra a evenDigits mediante un push
      evenDigits.push(creditCard[i] * 2 - 9);
    //De lo contrario, el resultado entra a evenDigits
     else evenDigits.push(creditCard[i] * 2);
  }

  
  for(var i = creditCard.length - 1; i >= 0; i - 2) {
    oddDigits.push(creditCard[i]);
  }

  for()

}