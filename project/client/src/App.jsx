import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRoutes} from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Register } from './pages/Register.jsx'
function App() {
  const [count, setCount] = useState(0)
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
      <div className='App'>        
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
    </div>
    </>
  )
}

export default App
