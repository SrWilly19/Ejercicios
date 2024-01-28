import { useEffect, useState } from "react";

export function GithubUser({username}){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    async function fecthGithubUser(username){
        setLoading(true);
        setError(null);
        try{
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json();
            setData(json); 
        }catch(error){
            setError(error)
            setData(null)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fecthGithubUser(username) 
    }, [username])

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There gas been an error</h1>}
            {data && (
                <div>
                    <p>{data.login}</p>
                    <img src={data.avatar_url} />
                    <p>{data.name}</p>
                </div>
            )}
        
        </div>
    )
}