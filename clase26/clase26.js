class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre=nombre
    this.apellido=apellido
    this.altura=altura
  }
  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(nombre, apellido)
    }
  }
  soyAlto(){
    return this.altura>=1.75;
  }
}
class Developer extends Persona {
  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log('Perdón, no sabía que eras Developer');
  }
}
var anderson = new Persona('Anderson', 'Patiño', 1.75)
anderson.saludar(responderSaludo)
var dave=new Developer('Dave', 'Grohl', 1.75)
dave.saludar(responderSaludo)
