import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'
import Food from './function.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}



// ITS NOT A CORRECT SYNTAX
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'Click on me to visit google'
// }



const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)


const anotherUser = "tejas"

const ReactElement = React.createElement(
  'a',
  { href: 'https://www.instagram.com/', target: '_blank' },
  'click me to visit instagram',
  
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {ReactElement}
    {Food}
  </>
)
