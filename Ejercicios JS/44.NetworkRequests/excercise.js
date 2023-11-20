  //Utilizamos fetch para recuperar los datos de la URL proporcionada, con el id especificado
  async  function fetchTodoByID(todoId){
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

    try{
      const response = await fetch(url);
      const todo = await response.json();
      return todo;
    } catch(error){
      console.error(`Error fetching Todo: `, error);
      throw error;
    }
  }
   
  //
  function createTodoElements(todo){
    const h2title = document.createElement('h2');
    h2title.textContent = todo.title;

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = todo.completed;
    
    const container = document.getElementById('container');
    container.appendChild(h2title)
    container.appendChild(checkboxElement)
  }

  async function displayTodo(){
    try{
      const todoId = 4;
      const todo = await fetchTodoByID(todoId);
      
      createTodoElements(todo);
    }catch (error){
      console.error('Error displaying Todo: ', error);
    }
  }

displayTodo();