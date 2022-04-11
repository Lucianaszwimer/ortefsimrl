//Dejar los numeros con dos decimales y quitar los NaN
 
let data = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
data = data.concat(data);
let num = [];

for(var i=0; i<data.length; i++)
    {
        data[i]={
            Original:data[i],
            Modificado:Math.sqrt(data[i])
        };

        if (isNaN(data[i].Modificado)) {
           
          }else{
              console.log("Original "+data[i].Original, "Modificado "+ data[i].Modificado.toFixed(2));
          }
    }


