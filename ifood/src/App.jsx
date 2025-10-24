import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo1 from'./assets/logo.png'
import google from './assets/g.png'
import face from './assets/face.png'
import app from './assets/apple.png'

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
        <button>Entrar</button>
        <p id="logar">Logar com</p>
        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dpt-BR&dsh=S-1809534418%3A1761302136200098&ec=GAlA8wE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=pt-BR">
        <div>
          
          <img src={google} alt="" id="logo" />
        </div>
        </a>
        <a href="https://www.facebook.com/?locale=pt_BR">
        <div>
          <img src={face} alt="" id="face" />
        </div>
        </a>
         <a href="https://account.apple.com/sign-in">
        <div>
          <img src={app} alt="" id="face" />
        </div>
        </a>

      </div>
    </>
  )
}

export default App
