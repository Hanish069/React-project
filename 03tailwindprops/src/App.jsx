import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class='bg-yellow-400 text-black p-4 rounded-xl mb-4'>Chai inka Code</h1>
      <Card name="Macbook" btnText="click here"/>
      <Card name="Laptop" />
    </>
  )
}

export default App
