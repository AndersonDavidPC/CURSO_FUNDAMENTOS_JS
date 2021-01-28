var x=4, y='4';
console.log(x==y);//True
console.log(x===y);//False

var anderson={
  nombre: 'Anderson'
}
var otraPersona={
  nombre: 'Anderson'
}
console.log(anderson==otraPersona);//False

var otraOtraPersona=anderson;
console.log(anderson==otraOtraPersona);
//En este ultimo caso tenemos a dos objetos apuntando a la misma direccion de memoria, es decir, que si modificamos alguno de los dos, se afecta lo almacenado en esta dirección, es decir, ambos objetos cambian de valores:
otraOtraPersona.nombre='Luis';
console.log(otraOtraPersona);
console.log(anderson);
