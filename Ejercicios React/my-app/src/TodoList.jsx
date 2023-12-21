import { useState } from "react"

export function TodoList(){
    const [todo, setTodos] = useState([]);

    const handleAddTodo = () =>{
        const newTodo = document.querySelector('input').value;

        if(newTodo.trim() !== ''){
            setTodos([...todo, newTodo]);
            document.querySelector('input').value = '';
        }
    }

    return (
        <div>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}>{todo}</li>    
                ))}
            </ul>

            <input type="text" placeholder="Nueva tarea" />
            <button onClick={handleAddTodo}>Agregar</button> 
            <pre>
                {JSON.stringify(todo, null, 2)}
            </pre>
        </div>
        
    )
}