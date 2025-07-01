import React from 'react'
import UserContext from '../contexts/UserContext';

function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    //Accessing setUser from context object
    const {setUser} = React.useContext(UserContext);

    // console.log(setUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text" 
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input 
        type="text" 
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login