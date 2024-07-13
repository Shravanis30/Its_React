import { useState } from 'react'
import './App.css'

function App() {

  const [addTitle, setAddTitle] = useState([]);
  const [addTask, setAddTask] = useState([]);
  const[inputTitle, setInputTitle] = useState('')
  const[inputTask, setInputTask] = useState('')


  const clearInputBox = () => {
    setAddTask([]);
    setAddTitle([]);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setAddTask();
      setAddTitle();
    
    }



  return (
    <>

      <div className="w-full h-screen bg-sky-950 ">



        <div className="flex text-center flex-col justify-center items-center">
          <h1 className="text-white my-10 text-4xl ">Just Do It !!!</h1>


          <div className=" bg-slate-400 mt-1/4 w-4/6 h-15 rounded-lg justify-center items-center">

            <form
              action=""
              onSubmit={handleSubmit}
            >
              <h3 className='pt-2'>ADD YOUR TASK HERE</h3>
              <div className='flex items-center justify-center my-5 mx-3 space-x-3'>

                <input
                  type="text"
                  placeholder='Add title'
                  className='outline-none w-1/3 py-2 px-3 rounded-lg'
                />

                <input
                  type="text"
                  placeholder='Add a task'
                  className="outline-none w-5/6 py-2 px-3 rounded-lg"
                />

                <button
                  className='bg-sky-500 px-4 py-2 text-white hover:bg-sky-700 rounded-lg'
                  onClick={clearInputBox}
                >
                  ADD
                </button>
              </div>

            </form>


            <div className=''>
              {/* your task has been added */}
            </div>


          </div>


          <div className="w-4/6 h-96 overflow-y-auto bg-slate-400 p-4 mt-5 space-y-3 rounded-lg shadow-md custom-scrollbar">
            <div className="space-y-4">
              {/* Chat messages go here */}
              <div
                className="bg-white p-2 rounded-lg shadow text-start">

                <div
                  className='font-bold'>
                  {setAddTitle}
                </div>

                <div className='text-slate-800'>
                  {setAddTask}
                </div>

                hi
              </div>

            </div>
          </div>



        </div >
      </div>
    </>
  )
}

export default App
