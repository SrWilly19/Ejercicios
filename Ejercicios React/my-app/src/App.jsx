import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";

/*Can you use the Hello component more than once in the App component? Si What happens if you do? Si lo copio si volvera a representar mi componente en la pagina
Can you render the Message component directly within the App component? Si What happens if you do? Se representa el mensaje que tenemos dentro de nuestro componente Message
Write your answers in a comment*/
export function App(){
    return(
        <div>
            <HelloWorld />
            <Message />    
        </div>
    )
}