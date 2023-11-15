

 async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    
   
    data.forEach(element => {
        const contenedor = document.createElement("div")
        contenedor.classList.add("container")
        const userID = document.createElement("h1")
        userID.classList.add("userID")
        const titulo = document.createElement("h1")
        titulo.classList.add("title")
        const completado = document.createElement("input")
        completado.classList.add("completed")
        completado.type = "checkbox"
        contenedor.appendChild(userID)
        contenedor.appendChild(titulo)
        contenedor.appendChild(completado)
        const {userId, id, title, completed} = element
        userID.textContent = `userId: ${userId}`
        titulo.textContent = `${title}`
        completado.checked = completed
        const body = document.getElementById("body")
        body.appendChild(contenedor)

    });
 }

 fetchData();