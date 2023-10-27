class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


  static fromObject(objLiteral){
    //Desestructuracion del objeto, extraemos las propiedades de un objeto y las asignamos a una variable individual.
    const { firstName, lastName} = objLiteral;
    return new Person(firstName, lastName)
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
