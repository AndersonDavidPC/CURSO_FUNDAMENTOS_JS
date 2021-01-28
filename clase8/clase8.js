var anderson={
  nombre: 'Anderson',
  edad: 19
};
function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad+1
  }
}
cumpleanos(anderson);

var andersonViejo=cumpleanos(anderson);
