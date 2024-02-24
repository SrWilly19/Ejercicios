
import { useGithubUser } from "./useGithubUser"


export function GithubUser({username}){
    const {data, loading, error, onFetchUser} = useGithubUser(username);

    function handleGetUserData(){
        onFetchUser(username)
    }

    return (
        <div>
            <button onClick={handleGetUserData}>Load User Data</button>
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