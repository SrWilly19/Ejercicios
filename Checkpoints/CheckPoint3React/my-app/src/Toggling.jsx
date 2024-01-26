import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Toggling(){
    const [isActive, setIsActive] = useState(false)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchRandomUsers = async () =>{
            try{
                const response = await fetch("https://random-data-api.com/api/users/random_user?size=4");
                if(!response.ok){
                    throw new Error(`Error! Status: ${response.status}`)
                }
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            }catch(error){
                console.error("Error fgetching random users: ", error.message);
                setLoading(false);
            }
        };
        fetchRandomUsers();
    }, [])

    const handleToggle = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    }

    console.log(users);
    return(
        
        <div>
            <h2>Toggle</h2>
            <p>Estado: {isActive ? "Activado" : "Desactivado"}</p>
            <button  onClick={handleToggle}>{isActive ? "Desactivar" : "Activar"}</button>

            {isActive && (
                <div>
                    <p>Esta activado</p>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                       <div>
                            {users.map((user, index) => (
                                <Card key={index} user={user} />
                            ))}
                       </div> 
                    )}
                </div>
            )}
        </div>
    )
}