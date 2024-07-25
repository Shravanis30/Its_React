
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  // it is printed twice because react is in strict mode so it goes into production

  return (
    <>
      
      <p>React with appwrite</p>
    </>
  )
}

export default App
