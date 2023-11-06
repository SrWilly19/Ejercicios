function repeatHello(callback){
    const message = () => { console.log("Hello");}
    //Utilizamos setInterval para ejecutar message cada 1 segundo
    setInterval(message, 1000)
}

