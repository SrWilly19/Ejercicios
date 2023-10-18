function sumUntil(maxValue) {
  let suma = 0;
  for(let i = 1; i <= maxValue; i++){
    suma += i;
    /*Es lo mismo que arriba
    suma = suma + i;*/
  }
  return suma;
}

console.log(sumUntil(5));