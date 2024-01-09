import { useContext, useEffect, useState } from "react"
import classes from "./Clock.module.scss"
import { LanguageContext } from "./LanguageContext"

export function Clock(){
    const [date, setDate] = useState(new Date())
    const language = useContext(LanguageContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getMessage = () => {
        switch (language){
            case 'en':
                return 'Current time: ';
            case 'es':
                return 'Hora actual: ';
            case 'it':
                return 'Ora attuale: ';
            default:
                return 'Current time: '
            }
    }
    return (
            <h2 className={classes.text}>{getMessage()}{date.toLocaleTimeString()}</h2>
        
    )
}
