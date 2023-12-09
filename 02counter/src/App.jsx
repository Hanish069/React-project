import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const AddValue = () => {
    if(count<20)
    setCount(count+1)
  }
  const RemoveValue = () => {
    if(count>0)
    setCount(count-1)
  }
  return (
    <>
      <h1>Chai inka React</h1>
      <h2>count value: {count}</h2><br/>
      <button onClick={AddValue}>Add Value : {count}</button><br/><br/>
      <button onClick={RemoveValue}>Remove Value : {count}</button><br/>
    </>
  )
}

export default App
