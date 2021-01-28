var anderson={
  nombre: 'Anderson',
  apellido: 'Patiño',
  edad: 19
};

function imprimirNombreMayus(n) {
  n=n.toUpperCase();
  console.log(n);
}
imprimirNombreMayus(anderson.nombre);

function imprimirNombreMayus2(persona) {
  var nombre=persona.nombre.toUpperCase();
  console.log(nombre);
}
imprimirNombreMayus2(anderson);

function imprimirNombreMayus3({nombre}) {
  console.log(nombre.toUpperCase());
}
imprimirNombreMayus3(anderson);
