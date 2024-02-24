import { useForm } from "./useForm";

export function LoginForm(){
    const [formValues, handleInputChange] = useForm({username: '', password: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues)
    };
    /* 
    ! Utiliazamos htmlFor yua que se usa para asociar la etiqueta con un input especifico del formulario. La principal razon para hacer esta asociacion es mejorar la accesibilidad y la
    ! usabilidad del formulario */
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" value={formValues.username} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={formValues.password} onChange={handleInputChange} />
            </div>
            <button type="submit">Login</button>
            <div>
                <h3>Username : {formValues.username} </h3>
                <h3>Password : {formValues.password} </h3>
            </div>
        </form>
    )
}