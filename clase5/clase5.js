var nombre='Anderson' //variable global
function imprimirNombreMayus(n) {
  n=n.toUpperCase()//variable local
  console.log(n);
}
imprimirNombreMayus(nombre);
