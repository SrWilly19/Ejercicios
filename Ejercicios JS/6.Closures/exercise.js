function printName(){
    var helloName = "Hello John";

    function inner(){
        
        return helloName;
    }
    return inner;
}

var miCierre =  printName();
console.log(miCierre());