import { useCallback, useEffect, useState,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumberAllowed] = useState(false);
  const [character, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str += "0123456789"
    if(character) str += "`~!@#$%^&*()-_+='{}[]:;/?>.,<|\\\""

    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, number, character, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  })

  useEffect(() => {
    passwordGenerator()
  }, [length, character,number, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto overflow-hidden outline-1 justify-center shadow-md 
  rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
        <h1 className='text-white text-center justify-center my-3'>Password Generator</h1>
        <div className='flex items-center shadow rounded-lg overflow-hidden mb-4'>
          <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
          >
          </input>
          <button
            onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-centeer gap-x-1'>
            <input
                type='range'
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
            >
            </input>
            <label>Length: {length} </label>
          </div>
          <div className='flex items-centergap-x-1'>
          <input
              type='checkbox'
              defaultChecked={number}
              id="inputNumber"
              onChange={() => {
                  setNumberAllowed((prev) => !prev)
              }}
          >
          </input>
          <label htmlFor='inputNumber'> Numbers</label>
          </div>
          <div className='flex items-centergap-x-1'>
          <input
              type='checkbox'
              defaultChecked={character}
              id="inputChar"
              onChange={() => {
                  setNumberAllowed((prev) => !prev)
              }}
          >
          </input>
          <label htmlFor='inputChar'> Characters</label>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
