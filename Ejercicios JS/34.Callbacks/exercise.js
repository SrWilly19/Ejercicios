function printAsyncName(callback, name){
    setTimeout(function(){
        console.log("Hello");
        setTimeout(function(){
            console.log(name);
        }, 2000);
    },1000);
}

printAsyncName(function(){
    console.log("Ejecutado");
}, "Willy");