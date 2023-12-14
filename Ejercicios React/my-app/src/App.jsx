import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

/*Can you use the Hello component more than once in the App component? Si What happens if you do? Si lo copio si volvera a representar mi componente en la pagina
Can you render the Message component directly within the App component? Si What happens if you do? Se representa el mensaje que tenemos dentro de nuestro componente Message
Write your answers in a comment*/
/*What happens if no name prop is passed to the Welcome component? Si no tenemos nada puesto para esos caso solo sladra elmensaje de "Welcome, " sin nignun nombre
 Can you set a default value for the name prop? Si se puede, en mi caso he puesto el nombre guest por si no entrara ningun nombre*/
export function App(){
    return(
        <div>
            <HelloWorld />
            <Message />
            <Welcome name="John" age={17}/>    
        </div>
    )
}