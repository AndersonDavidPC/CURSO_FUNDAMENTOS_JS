const API_URL='https://swapi.dev/api/'
const PEOPLE_ULR='people/:id'

// $.get(`${API_URL}${PEOPLE_ULR.replace(':id',1)}`, { crossDomain:true })

const LUKE_URL=`${API_URL}${PEOPLE_ULR.replace(':id',1)}`;
const OPTS={ crossDomain:true };
// $.get(LUKE_URL, OPTS, function(person) {
//   console.log(`Hola soy ${person.name}`);
// })
const onResponse = function(person) {
  console.log(`Hola soy ${person.name}`);
}
$.get(LUKE_URL, OPTS, onResponse)
