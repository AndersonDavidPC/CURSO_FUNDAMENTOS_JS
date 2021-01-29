function Persona(nombre, apellido, alt) {
  this.nombre=nombre
  this.apellido=apellido
  this.alt=alt
}
const soyAlto=( {alt} ) => {
  alt>=1.75
    ? console.log('Soy alto')
    : console.log('No soy alto')
};
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  soyAlto(this);
};

var anderson=new Persona('Anderson', 'Patiño', 1.75);
anderson.saludar();
