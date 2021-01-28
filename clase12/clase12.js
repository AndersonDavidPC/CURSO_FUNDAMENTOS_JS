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
const LEGAL_AGE=18;

// const isOfLegalAge=function(person) {
//   return person.age>=LEGAL_AGE;
// }

// const isOfLegalAge = person => person.age >= LEGAL_AGE;

const isOfLegalAge = ({ age }) => age >= LEGAL_AGE;
const printIfIsOfLegalAge=person=>{
  isOfLegalAge(person)
    ? console.log(`Yes, ${person.name} is of legal age`)
    : console.log(`No, ${person.name} is not of legal age`)
};
printIfIsOfLegalAge(anderson);

// function allowAccess(person) {
//   isOfLegalAge(person) ? console.log('ACCESS GRANTED') : console.log('ACCESS DENIED')
// }
// allowAccess(anderson)

const allowAccess=person=>{
  isOfLegalAge(person) ? console.log('ACCESS GRANTED') : console.log('ACCESS DENIED')
};
allowAccess(anderson)
