import { useEffect, useRef, useState } from "react"

export function FocusableInput(){
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    
    return (
        <div>
            <input ref={inputRef} name="username"></input>
        </div>
    )
}