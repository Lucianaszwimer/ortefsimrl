const data = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];

const data2 = [];
var aux = 0;
    for(var i=0; i<data.length; i++)
    {
        aux=data2[i]
        data2[1]=data[i]*data[i-1]-data[i+1];
        console.log(data2);
    }