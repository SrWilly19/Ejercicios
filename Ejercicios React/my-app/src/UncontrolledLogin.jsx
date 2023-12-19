export function UncontrolledLogin(){
    function handleFormSubmit(event){
        event.preventDefault()
        
        const formData = new FormData(event.target)
        
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            session: formData.get('session') === 'on' ? true : false, 
        }
        console.log(data)
    
    }

    /*What are the advantages? La API da un metodo mucho mas sencillo para recopilar los datos de los formularios. Si el formulario contiene campos de archivo, FormData maneja automaticamente
    la codificacion y envio de estos archivos. Funciona bien con varios tipos, campos de texto, casillas de verificacion, botones de opcion y campos de archivo.
    What are the disadvantages? Se limita a formularios HTML, su utilidad se enfoca en el manejo de datos de formularios web. No es la mejor opcion si se necesita enviar datos estructurados 
    de manera mas compleja. No maneja automaticamente datos mas complejos, Es posible que necesites realizar conversiones manuales si tus datos son mas complejos que simples formularios*/
    return (
        <form onSubmit={handleFormSubmit}>
            <h1>My uncontrolled Form</h1>
            <input name="username"/>
            <input name="password" type="password"/>
            <input name="session" type="checkbox"/>
            <button>Login</button>
            <button type="reset">Reset</button>

        </form>
    )
}