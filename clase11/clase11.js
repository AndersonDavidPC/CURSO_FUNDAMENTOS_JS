var anderson={
  name: 'Anderson',
  lastName: 'Patiño',
  age: 19,
  engineer: true,
  chef: false,
  singer: false,
  dj: false,
  guitarist: false,
  sad: true
};
const ADULT_AGE=18;
function isAdult(person) {
  return person.age>=ADULT_AGE;
}

function printIfIsAdult(person) {
  if (isAdult(person)) {
    console.log(`Yes, ${person.name} is an adult`);
  }else {
    console.log(`No, ${person.name} is not an adult`);
  }
}
printIfIsAdult(anderson);
