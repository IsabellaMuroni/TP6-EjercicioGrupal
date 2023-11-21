import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioContainer from './components/FormularioContainer/FormularioContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormularioContainer/>
    </>
  )
}

export default App
