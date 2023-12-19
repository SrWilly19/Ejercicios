import { useState } from "react"

function createData(){
    return{
        username: '',
        password: '',
        session: false
    }
}

export function Login({onLogin}){
    const[data, setData] = useState(createData())
    

    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
        
        setData((data) => {
            return{
                ...data,
                [name] : type === 'checkbox' ? checked : value,
            }
        })
    }
    function handleClick(){
        onLogin(data);
    }
    function handleResetForm(){
        setData(createData())
    }

    return (
        <div>
            <input name="username" placeholder="Username" value={data.username} onChange={handleInputChange}/>
            <input name="password" placeholder="Password" type="password" value={data.password} onChange={handleInputChange}/>
            <button  disabled={!data.username || !data.password} onChange={handleClick} >Login</button>
            <input name="session" type="checkbox" checked={data.session}  onChange={handleInputChange}/>
            <button onClick={handleResetForm}>Reset</button>
        </div>
    )
}