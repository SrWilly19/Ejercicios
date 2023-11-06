function repeatHello(callback){
    const message = () => { console.log("Hello");}

    setInterval(message, 1000)
}

