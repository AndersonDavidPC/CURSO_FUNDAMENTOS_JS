class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }
  soyAlto(){
    return this.altura>=1.75;
  }
}
class Developer extends Persona {
  // constructor(nombre, appellido, altura) {
  //  super(nombre, appellido, altura)
  // } //opcional, si se desea modificar la clase hija
  saludar(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}, mi estatura es de ${this.altura}m y soy desarrollador.`);
  }
}

var anderson = new Persona('Anderson', 'Patiño', 1.75)
anderson.saludar()
var dave=new Developer('Dave', 'Grhol', 1.75)
dave.saludar()
