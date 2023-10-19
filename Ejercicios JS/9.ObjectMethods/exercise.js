const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
//Lo utilizo para crear una array con las key/value de mi objeto
let keys = Object.keys(person);

for(var i = 0; i < keys.length; i++){
  //Le doy el valor de keys[i] porque sera la posicion que va utilizando y sumando en el bucle.
  var key = keys[i];
  //Utilizo person[key] porque asi entra en el valor de cada key, es decir primero sera person["firstName"] entonces devolvera su valor "Mario"
  var values = person[key];
  console.log(key + " : " + values);
}