export function Card({user}){
    return(
        <div>
            <img src={user.avatar} alt={`User`}/>
            <p>Name: {user.first_name}</p>
            <p>Surname: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>State: {user.address.state}</p>
            
        </div>
    )
}