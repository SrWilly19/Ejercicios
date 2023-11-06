function repeatHello(callback){
    const message = () => { console.log("Hello");}
    //Utilizamos setInterval para ejecutar message cada 1 segundo
    let id = setInterval(message, 1000);
    setTimeout(() => {clearInterval(id); console.log("Intervalo de 5 segundos")}, 5000);
}

repeatHello();

//Hemos utilizado la funcion de flecha debido a su simplicidad y porque no necesita acceder a ningun contexto externo o a la variable "this". En situaciones mas complejas donde 
//necesitamos acceder al contexto this, las funciones regulares seran mas adecuadas.