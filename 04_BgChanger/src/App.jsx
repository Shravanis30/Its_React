import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  return (

    <div className='w-full h-screen'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center items-center top-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3  bg-slate-300 shadow-lg  p-5 rounded-lg'>

          <button
            onClick={() => setColor("red")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'red', color: "white" }}
          >Red</button>

          <button
            onClick={() => setColor("green")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'green', color: "white" }}
          >Green</button>

          <button
            onClick={() => setColor("blue")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'blue', color: "white" }}
          >Blue</button>

          <button
            onClick={() => setColor("olive")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'olive', color: "white" }}
          >Olive</button>

          <button
            onClick={() => setColor("gray")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'gray', color: "white" }}
          >Gray</button>

          <button
            onClick={() => setColor("purple")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'purple', color: "white" }}
          >Purple</button>

          <button
            onClick={() => setColor("yellow")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'yellow' }}
          >Yellow</button>

          <button
            onClick={() => setColor("pink")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'pink' }}
          >Pink</button>

          <button
            onClick={() => setColor("lavender")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'lavender' }}
          >Lavender</button>

          <button
            onClick={() => setColor("white")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'white' }}
          >White</button>

          <button
            onClick={() => setColor("black")}
            className='outline-none px-5 py-2 rounded-xl'
            style={{ backgroundColor: 'black', color: "white"}}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
