# Destructuring assignment

Use the destructuring to make the check of the age easier. Try modifying the parameter of the isAdult function.

Suggestion: look at the official documentation[ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Esta es otra manera de hacerlo en la que si no tiene age el objeto al que se lo pasamos nos lo dira
  if(age) return age >= 18;
  else return "Tu objeto no tiene age";
manera de crear una funcion y llamarla
const isAdult = isAdult(person)
console.log(isAdult)