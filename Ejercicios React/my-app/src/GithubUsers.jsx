import { useState } from "react"
import { GithubUser } from "./GithubUser";

const GithubUsers = () =>{
    const [username, setUsername] = useState('');
    const [userList, setUserList] = useState('');

    const handleInputChange = (e) => {
        setUsername(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username){
            setUserList([...userList, username]);
            setUsername('')
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleInputChange} placeholder="Nombre de GitHub" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {userList.map((user, index) => (
                    <li key={index}>
                        <GithubUser username={user} />
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default GithubUsers;