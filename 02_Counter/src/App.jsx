import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  
  // let counter = 5;

  const addValue = () => {
    if(counter>0)
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1); 
    console.log('clicked', counter)

  }

  const subtractValue = () => {
    if(counter>0)
    setCounter(counter - 1)
    console.log('clicked', counter)

  }

  return (
    <>
      <h1>React with shraavniii</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={subtractValue}>Remove Value </button>
      <p>footer: {counter}</p> 
    </>
  )
}

export default App
