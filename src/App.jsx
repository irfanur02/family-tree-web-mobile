import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './assets/css/style.css'
import Login from '../src/pages/Login/Login'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <Login />
  )
}

export default App
