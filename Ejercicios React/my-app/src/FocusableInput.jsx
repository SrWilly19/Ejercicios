import { useEffect, useRef } from "react"

export function FocusableInput(){
    const mountedRef = useRef(false)
    const inputRef = useRef(null)

    useEffect(() => {
        if(!mountedRef.current){
            mountedRef.current = true;
            console.log('Mounting for the first time')
        } else{
            console.log('Mounting again for debug puroposes')
        }
        inputRef.current?.focus()
    }, [])
    
    return (
        <div>
            <input ref={inputRef} name="username"></input>
        </div>
    )
}