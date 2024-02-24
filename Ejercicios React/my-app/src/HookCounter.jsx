import { useCounter } from "./useCounter";

export function HookCounter({initialValue = 0}){
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}