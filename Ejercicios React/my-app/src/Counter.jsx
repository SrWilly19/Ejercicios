import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

/*When calling "setter" function to increment the counter, should the parameter be a function or an immediate value? Function Why? 
La funcion de actualizacion nos garantiza la consistencia y precision del estado, especialmente en situaciones donde las actualizaciones del estado pueden ser asincronas
*/
export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)


    useEffect(() => {
        console.log(`The value of the counter is ${counter}`)
    })

    function handleCounterIncrement(){
        setCounter((c) => c + 1)
    }

    function handleCounterDecrement(){
        setCounter((c) => c - 1)
    }

    function handleCounterReset(){
        setCounter(initialValue);
    }


    return(
        <div>
            <CounterDisplay counter={counter} />
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}