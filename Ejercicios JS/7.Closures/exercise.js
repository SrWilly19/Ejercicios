function printName(){
    var helloName = "Hello John";

    function inner(){
        return helloName;
    }

    setTimeout(function(){
        console.log(helloName);
    }, 1000);

    return inner;
}
var miCierre = printName();
