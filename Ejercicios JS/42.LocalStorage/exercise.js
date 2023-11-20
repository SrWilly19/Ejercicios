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

saveLocalStorage();