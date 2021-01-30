const API_URL='https://swapi.dev/api/'
const PEOPLE_ULR='people/:id'

const OPTS={ crossDomain:true };
const onResponse = function(person) {
  console.log(`Hola soy ${person.name}`);
}

function getCharacter(id) {
  const url=`${API_URL}${PEOPLE_ULR.replace(':id', id)}`;
  $.get(url, OPTS, onResponse)
}
getCharacter(1)
getCharacter(2)
getCharacter(3)
