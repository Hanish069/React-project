import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/userContext'

function Login() {
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const {setUser, setPass} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName})
        setPass({password})
    }

    return (
        <div>
            <h2>Login!!</h2>
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Enter username'
            />
            <br />
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
            />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
