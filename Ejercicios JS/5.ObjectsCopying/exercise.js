const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";
//Esto sucede porque el objeto person2 modifica el objeto al que estan apuntando person1 y person2, no esta creando una nueva persona, solo modifica el que ya tenemos.
console.log(person1);
console.log(person2);
