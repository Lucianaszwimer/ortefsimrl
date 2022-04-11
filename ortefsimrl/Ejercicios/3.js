//Duplicar el array anterior y aplicarle la funcion raiz cuadrada
//obteniendo como resultado : original 9 --> modificado 3
 
let data = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
data = data.concat(data);
let num = [];
 
for(var i=0; i<data.length; i++)
    {
        data[i]={
            Original:data[i],
            Modificado:Math.sqrt(data[i])
        };
    }

console.log(data);
 
