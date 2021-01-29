var anderson={
  name: 'Anderson',
  lastName: 'Patiño',
  age: 19,
  weight: 83
};
console.log(`Al inicio del año ${anderson.name} pesa ${anderson.weight}kg`);
const INCREMENTO=0.2;
const DIAS_DEL_ANO=365;
const aumentarDePeso=(persona) => persona.weight+=INCREMENTO
const bajarDePeso=(persona) => persona.weight-=INCREMENTO
const META=anderson.weight-3;
const comerMucho=() =>Math.random()<0.3
const realizarDeporte=() =>Math.random()<0.4
var dias=0
while (anderson.weight>META) {
  if (comerMucho()) {
    aumentarDePeso(anderson)
  }
  if (realizarDeporte()) {
    realizarDeporte(anderson)
  }
  dias++;
}

console.log(`Pasaron ${dias} y ${anderson.name} logró la meta`);
