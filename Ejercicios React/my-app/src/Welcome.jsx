import { Age } from './Age'


export function Welcome({name = 'Guest', age}) {
    return <div className='welcome'>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
            {age > 18 &&  <Age age={age}/>}
            {Boolean(age) && <Age age={age} />}
            {age > 18 && age < 65 && <Age age={age} />}
            {age > 18 && age < 65 && name == "John" && <Age age={age} />}
            {age > 18 ? <Age age={age}/> : <p>You are to young!</p>}
        </div>
}