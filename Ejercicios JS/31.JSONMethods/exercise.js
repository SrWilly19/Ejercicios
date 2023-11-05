const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};

//Stringfy crea una representacion de JSON del objeto original, y luego .parse crea un nuevo objeto a pa rtir de esa representacion que le hemos dado. Esto garantiza
//una copia profunda.
const person2 = JSON.parse(JSON.stringify(person1));
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);