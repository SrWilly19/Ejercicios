const user = {
  id: 1,
  name: "John",
  age: 25,
};


function saveLocalStorage(){
  //Convertimos el objeto user en una cadena JSON
  const userJo = JSON.stringify(user);
  //Guardamos la cadena que hemos creado anteriormente y guardado en la variable "userJo" en localStorage con la clave 'user'
  localStorage.setItem('user', userJo);
}

function recoverUserLocalStorage(){
  
  //Primero debemos coger la cadena JSON que esta en localStorage con la clave "user"
  const storedUserJo = localStorage.getItem('user')
  //Comprobamos si tenemos datos almacenados
  if(storedUserJo){
    //Convertimos la cadena JSON en un nuevo objeto
    const storedUser = JSON.parse(storedUserJo);
    //Imprimimos el objeto recuperado por consola
    console.log("Usuario guardado en localStorage:", storedUser);

    //devuelve el objeto recuperado si fuera necesario
    return storedUser
  }else{
    console.log("No se ha encontrado ningun usuario");
    return null;
  }
}

saveLocalStorage();

recoverUserLocalStorage();