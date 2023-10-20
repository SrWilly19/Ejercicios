function adultFilter(persons) {
  const adult = []; 
  for(var i = 0; i < persons.length; i++){
        if(persons[i].age >= 18){
          adult.push(persons[i]);
        }
  }
  return adult;
}

/*Esto seria el caso si fueran mayores en EEUU
function adultFilterUnitedStates(persons) {
  const adult = []; 
  for(var i = 0; i < persons.length; i++){
        if(persons[i].age >= 21){
          adult.push(persons[i]);
        }
  }
  return adult;
}*/


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
/*const adultsUnitedStates = adultFilterUnitedStates(persons)
console.log(adultsUnitedStates)
 */