import { useState } from "react"

export function Form(){
    const [data, setData] = useState(undefined)

    function handleFormSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        
        const data = {
            name: formData.get('name'),
            surname: formData.get('surname'),
            email: formData.get('email')
        }
        setData(data)
        
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input name="name"></input>
            <input name="surname"></input>
            <input name="email"></input>
            <button>Submit</button>
            {data && <div>
                    <h1>{data.name}</h1>
                    <h1>{data.surname}</h1>
                    <h1>{data.email}</h1>
                </div>}
        </form>
    )
}