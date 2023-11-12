let ourPromise = new Promise((resolve, reject) => {
    const number = 15;
    if(number > 10){
        resolve(number);
    }else{
        reject(new Error(`The number ${number} is not greater than 10`));
    }
})

ourPromise
    .then((val) => console.log(val))
    .catch((err) => console.log(err))