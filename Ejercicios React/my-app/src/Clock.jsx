import { useEffect, useState } from "react"
import classes from "./Clock.module.scss"

export function Clock(){
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <h2 className={classes.text}>Current time: {date.toLocaleTimeString()}</h2>
}