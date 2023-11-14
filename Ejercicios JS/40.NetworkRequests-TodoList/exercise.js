
async function getUser(){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    let userData = await response.json();
    return userData;
}

 getUser();

