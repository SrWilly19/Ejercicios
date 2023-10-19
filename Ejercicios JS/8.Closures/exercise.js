function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    return value * 2;
  }
  return inner;
}

var miCierre = multiplyByTwo(4);
console.log(miCierre());

