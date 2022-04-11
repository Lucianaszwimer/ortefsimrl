const num = [11, 2, 33, -1, 110, 99, 8].sort((a,b)=>b-a); //a-b --> menos a mayor    b-a --> mayor a menor

const impares = num.filter(number => {
    return number % 2 !== 0;
  });

//console.log(impares);       expected output: [11, 33, -1, 99]

console.log(impares[1]);

//Para hacer sort con numeros se hace  --> array.sort([funcion de comparacion])