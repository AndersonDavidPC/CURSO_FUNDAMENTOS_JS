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

var anderson=new Persona('Anderson', 'Patiño', 1.75);
anderson.saludar();
anderson.soyAlto();
