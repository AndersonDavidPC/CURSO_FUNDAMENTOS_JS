function herencia(protoHijo, protoPadre) {
  var fn = function() {

  }
  fn.prototype=protoPadre.prototype
  protoHijo.prototype=new fn
  protoHijo.prototype.constructor=protoHijo
}

function Persona(nombre, apellido, alt) {
  this.nombre=nombre
  this.apellido=apellido
  this.alt=alt
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
  return this.alt>=1.75
}
function Developer(nombre, apellido) {
  this.nombre=nombre
  this.apellido=apellido
}
herencia(Developer, Persona)
Developer.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}

var anderson=new Persona('Anderson', 'Patiño', 1.75);
var dave=new Developer('Dave', 'Grhol', 1.75)
anderson.saludar();
dave.saludar();
// anderson.soyAlto();
