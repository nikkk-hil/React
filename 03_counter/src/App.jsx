import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [counter, setCounter] = useState(15)

function counterUp(){
  if(counter >= 20) return;
  // setCounter(counter + 1);

  // This will return only +1 as the react fiber perform task in bundle due to which it avoids same thing
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);

  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);
  setCounter(prevCounter => prevCounter + 1);

  console.log(counter);
}

function counterDown(){
  if(counter == 0) return;
  setCounter(counter - 1);
  console.log(counter);
  
}


//To handle UI updation dynamically use hooks

  return (
    <>
      <h1>React with ME</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={counterUp}>Counter Up</button> <br /><br />
      <button onClick={counterDown}>Count Down</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
