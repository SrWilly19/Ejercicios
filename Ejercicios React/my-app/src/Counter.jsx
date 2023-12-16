import { useState } from "react"

/*When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Function Why? 
La funcion de actualizacion nos garantiza la consistencia y precision del estado, especialmente en situaciones donde las actualizaciones del estado pueden ser asincronas
*/
export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((c) => c +1)
    }

    return(
        <div>
            <h2>I have  counted to {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}