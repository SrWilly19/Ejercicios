import { useState } from "react"
import { Welcome } from "./Welcome"


function createData(){
    return{
        user: '',
    }
}

export function InteractiveWelcome(){
    const[data, setData] = useState(createData())
    
    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        
        setData((data) => {
            return {
                ...data,
                [name] : value
            }
        })
    }
    
    return (
        <div>
            <input name="user" value={data.name} onChange={handleInputChange}/>
            <Welcome name={}/>
        </div>
    )
}