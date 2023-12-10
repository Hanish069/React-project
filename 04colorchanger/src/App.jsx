import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {

  const [color, setColor] = useState('grey');

  return (
    <div className="min-h-screen min-w-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <div  className="fixed flex flex-wrap justify-center bottom-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-transparent bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=> setColor('black')}
        className='outline-none px-4 py-1 rounded-3xl text-white shadow-lg'
        style={{backgroundColor: 'black'}}
        >
          Black
        </button>
        <button onClick={()=> setColor('red')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'red'}}
        >
          Red
        </button>
        <button onClick={()=> setColor('white')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'white'}}
        >
          White
        </button>
        <button onClick={()=> setColor('blue')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'blue'}}
        >
          Blue
        </button>
        <button onClick={()=> setColor('green')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'green'}}
        >
          Green
        </button>
        <button onClick={()=> setColor('yellow')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'yellow'}}
        >
          Yellow
        </button>
        <button onClick={()=> setColor('pink')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'pink'}}
        >
          Pink
        </button>
        <button onClick={()=> setColor('violet')}
        className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg'
        style={{backgroundColor: 'violet'}}
        >
          Violet
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
{/* <Button color='Black'/>
      <Button color='Red'/>
      <Button color='Orange'/>
      <Button color='Blue'/>
      <Button color='Yellow'/> */}