import { useState } from 'react'
import logo from './assets/react.svg'
import './App.css'
import {Home} from './components/Home/Home'
import Contact from './components/Contact/Contact'
import {About} from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={logo} alt="react logo" />
      <Home/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
