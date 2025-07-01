import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'

function App() {

  return (
    <>
      {/* providing children to UserContextProvider */}
      <UserContextProvider>
        <Login />
        <br />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
