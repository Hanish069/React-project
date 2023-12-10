import React, { useContext } from 'react'
import { UserContext } from '../Context/userContext'

function Profile() {
    
    const {user,pass} = useContext(UserContext)

    if(!user) return <div>Enter your credentials</div>
    return <div><br />Welcome {user.userName} <br /> Your password is {pass.password} </div>
}

export default Profile;
