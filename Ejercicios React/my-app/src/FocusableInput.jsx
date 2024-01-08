import { useEffect, useRef } from "react"
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';

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
            <Form>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon2" 
                    />
                    
                </InputGroup>
            </Form>
            <input ref={inputRef} name="username" placeholder="Username"></input>
        </div>
    )
}