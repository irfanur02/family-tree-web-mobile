import { useState } from 'react'
// import './assets/css/style.css'
import Login from '../src/pages/Login/Login'
import Dashboard from '../src/pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0);
  
  return (
    // <Login />
    <Dashboard />

  )
}

export default App
