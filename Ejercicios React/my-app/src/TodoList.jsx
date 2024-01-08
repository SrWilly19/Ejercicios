import { useState, useRef } from "react"
import classes from "./TodoList.module.scss"

export function TodoList(){
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null)


    const handleAddTodo = () =>{
        const newTodo = inputRef.current.value;

        if(newTodo.trim() !== ""){
            setTodos([...todos, newTodo]);
            inputRef.current.value = "";
        }
    }

    const handleRemoveTodo = (indexToRemove) => {
        const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
        setTodos(updatedTodos)
    }
    function handleTodoReset(){
        setTodos([]);
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button className={classes.buttonRemove} onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>    
                ))}
            </ul>

            <input type="text" placeholder="Nueva tarea" ref={inputRef}/>
            <button  className={classes.button} onClick={handleAddTodo}>Agregar</button>
            <button className={classes.button} onClick={handleTodoReset}>Reset</button>
        </div>
        
    )
}