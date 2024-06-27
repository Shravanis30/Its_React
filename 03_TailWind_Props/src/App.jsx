// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObject = {
    username: "shraavniii",
    age: 18
  }

  let arr = [19, 30, 85, 58]
  return (
    <>
      <h1 className='bg-indigo-500 text-black p-5 rounded-md'>Tailwind CSS</h1>


      <Card username="Its shraavniii N' ttejuuu" btntext="Click me" someObject={myObject} newObject={arr}/>
      <Card username="Its ttejuuu N' shraavniii"btntext="Visit me"/>
    </>
  )
}

export default App
