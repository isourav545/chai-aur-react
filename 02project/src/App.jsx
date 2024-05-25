import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(15)
  const addValue = () => {
   setCount((prev)=> prev+1);
   setCount((prev)=> prev+1);
   setCount((prev)=> prev+1);
   setCount((prev)=> prev+1);
   setCount((prev)=> prev+1);
  }

  const decreaseValue = () => {
   if(count >0){
    setCount(count-1);
   }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value : {count}</h2>
    <button  onClick={addValue}> Add Value</button>
    <br />
    <br/>
    <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
