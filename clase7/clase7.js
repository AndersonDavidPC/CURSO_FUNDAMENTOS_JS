var anderson={
  nombre: 'Anderson',
  apellido: 'Patiño',
  edad: 19
};

function imprimirNombreMayus2(persona) {
  var {nombre}=persona;
  console.log(nombre.toUpperCase());
}
imprimirNombreMayus2(anderson);

//Reto
var anderson={
  nombre: 'Anderson',
  edad: 19
};
function imprimirNombreYEdad(persona) {
  console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`);
}
imprimirNombreYEdad(anderson);
