import React from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {
    
    // Accessing user from context object
    const {user} = React.useContext(UserContext)

    if (!user) return <div>Please Login</div>
    return <div>Welcome {user.username} </div>

}

export default Profile