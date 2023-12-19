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

    function handleResetForm(){
        setData(createData())
    }

    function handleSubmit(event){
        //Previene el comportamiento predeterminado del formulario (seria recargar la pagina)
        event.preventDefault()

        onLogin(data)
    }

    //Se debe especificar que tipo de boton es ya que por defecto lo calificaria como submit, por eso en el boton de la linea 47 a pesar de que sabemos que es un boton
    //le ponemos el type="button"
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name="username" placeholder="Username" value={data.username} onChange={handleInputChange}/>
                <input name="password" placeholder="Password" type="password" value={data.password} onChange={handleInputChange}/>
                <button  type="submit" disabled={!data.username || !data.password}>Login</button>
                <input name="session" type="checkbox" checked={data.session}  onChange={handleInputChange}/>
                <button type="button" onClick={handleResetForm}>Reset</button>
            </div>
        </form>
    )
}