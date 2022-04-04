const num = [11, 2, 33, -1, 110, 99, 8].sort((a,b)=>b-a);

const impares = num.filter(number => {
    return number % 2 !== 0;
  });

//console.log(impares);
// expected output: [11, 33, -1, 99]

console.log(impares[1]);

// 