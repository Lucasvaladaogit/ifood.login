import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo1 from'./assets/logo.png'
import google from './assets/g.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <div className="box">
        <img src={logo1} alt="" className="logo1"/>
        <div className="top"></div> 
      </div>



      <div className="card">
        <h1>Login</h1>
        <input type="Usuario" id='Usuario' placeholder="usuario" />
        <input type="Senha" id='Senha' placeholder="senha" />
        <h2>Manter conectado </h2>
        <input type="checkbox" name="" id="check"  />
        <a href="http://"></a>
        <button>Entrar</button>
        <p id="logar">Logar com</p>
        <div>
          <img src={google} alt="" id="logo" />
        </div>

      </div>
    </>
  )
}

export default App
