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
for (var i = 1; i <=DIAS_DEL_ANO; i++) {
  var random=Math.random();
  if (random<0.25) {
    aumentarDePeso(anderson)
  }else if (random<0.5) {
    bajarDePeso(anderson)
  }
}
console.log(`Al final del año ${anderson.name} pesa ${anderson.weight.toFixed(2)}kg`);
