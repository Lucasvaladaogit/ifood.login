import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo1 from'./assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top">
      <img src={logo1} alt="" className="logo1"/>
      </div>
      <div className="card">
        
        <h1>Login</h1>
        <input type="Usuario" />
        <input type="Senha" />
        <input type="checkbox" name="Manter conectado" id="" />
        <a href="http://"></a>
        <button>entrar</button>
        <p>logar com</p>
      
      </div>
    </>
  )
}

export default App
