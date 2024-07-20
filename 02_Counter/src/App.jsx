import { useState } from 'react'
import './App.css'

function App() {


  // useSate is used to define the default value
  // int a
  // setvalue(input){
  //   a = input
  // }
  const [counter, setCounter] = useState(1)

  // let counter = 5;

  const addValue = () => {
    if (counter != null)
      setCounter(counter + 1);
    console.log('clicked', counter)

  }

  const subtractValue = () => {
    if (counter != null)
      setCounter(counter - 1)
    console.log('clicked', counter)

  }

  return (
    <>
      <div>
        <h1>React with shraavniii</h1>
        <h2>counter value: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br /><br />
        <button onClick={subtractValue}>Remove Value </button>
        <p>footer: {counter}</p>
      </div>
    </>
  )
}

export default App

