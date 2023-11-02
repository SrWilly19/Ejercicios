const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
//los ""...personInfo" guardan las demas variables dentro de personInfo gracias a los "..."
const {id, ...personInfo} = person;
console.log(id, personInfo);