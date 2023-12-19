import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

/*Can you use the Hello component more than once in the App component? Si What happens if you do? Si lo copio si volvera a representar mi componente en la pagina
Can you render the Message component directly within the App component? Si What happens if you do? Se representa el mensaje que tenemos dentro de nuestro componente Message
Write your answers in a comment*/
/*What happens if no name prop is passed to the Welcome component? Si no tenemos nada puesto para esos caso solo sladra elmensaje de "Welcome, " sin nignun nombre
 Can you set a default value for the name prop? Si se puede, en mi caso he puesto el nombre guest por si no entrara ningun nombre*/
export function App(){

    function handleShowTime(){
        const now = new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

    const handleLogin = (userData) => {
        console.log("Datos de inicio de sesion: ", userData)
    }

    return(
        <div>
            <HelloWorld />
            <Message />
            <Welcome name="John" age={17}/>
            <AlertClock onClick={handleShowTime}/>
            <Counter />
            <MouseClicker />
            <Clock />
            <InteractiveWelcome />
            <Login onLogin={handleLogin} /> 
            <UncontrolledLogin /> 
            <FocusableInput /> 
        </div>
    )
}