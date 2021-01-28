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

function printProfession(person) {
  console.log(`${person.name} is:`);
  if (person.engineer) {
    console.log('Engineer');
  }
  if (person.chef) {
    console.log('chef');
  }
  if (person.singer) {
    console.log('singer');
  }
  if (person.dj) {
    console.log('dj');
  }
  if (person.guitarist) {
    console.log('guitarist');
  }
  if (person.sad) {
    console.log('sad');
  }
}
printProfession(anderson);

function isAdult(person) {
  if (person.age>=18) {
    console.log(`Yes, ${person.name} is an adult`);
  }else {
    console.log(`No, ${person.name} is not an adult`);
  }
}
isAdult(anderson);
