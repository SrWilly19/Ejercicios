
function isLoggedIn(isLogged){
    return new Promise((resolve, reject) =>{
        let rand = Math.random();
        if(isLogged = true){
            resolve(rand);
        }else{
            reject(new Error("No es verdadero"))
        };
    });
}

function secondPromise(number){
    return new Promise((resolve, reject) => {
        if(number > 0.5){
            resolve({nombre: "John", edad: 24})
        } else{
            reject(new Error("No es mayor a 0.5"))
        }
    })
}

const isLogged = true;

isLoggedIn(isLogged)
    .then((randomNumber) => secondPromise(randomNumber))
    .then((userData) => {console.log("Final result: ", userData); })
    .catch((err) => console.log(err));
