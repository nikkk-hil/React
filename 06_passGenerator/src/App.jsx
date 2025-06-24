import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
    
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasCharacters, setHasCharacters] = useState(false);
  const [password, setPassword] = useState('');

  
  const passwordRef = useRef(null);

  const generatePassword = useCallback (() => {
    let pass = "";
    let str = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"];
    if(hasNumbers)
      str.push("0123456789");
    if(hasCharacters)
      str.push("`~!@#$%^&*()[]{}|/?<>");

    const strSize = str.length;
    for(let i = 0; i < length; i++){
      let ranIndex_Str = Math.floor(Math.random() * strSize);
      let size_RanIndex = str[ranIndex_Str].length;
      let ranIndex_StrElement = Math.floor(Math.random() * size_RanIndex)

      pass += str[ranIndex_Str].charAt(ranIndex_StrElement);
    }

    setPassword(pass);

  }, [length, hasNumbers, hasCharacters, setPassword]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    generatePassword();
  }, [length, hasNumbers, hasCharacters, generatePassword])
  
  return (
    <>
      <div className='w-6/12 h-80 bg-slate-800 text-center rounded-3xl p-10' style={{ marginLeft: '25%'}}>
        <h1 className=' text-5xl text-yellow-300 font-serif py-2 mb-8'>
          Password Generator
        </h1>
        <div className='flex justify-center overflow-hidden rounded-lg mb-10'>
          <input 
          type="text"
          value={password}
          ref={passwordRef}
          className='w-full h-10 text-2xl font-sans text-slate-800 px-2'
          />
          <button onClick={copyToClipboard} className='h-10 bg-blue-600 px-2 text-white text-lg hover:bg-blue-700'>copy</button>
        </div>

        <div className='flex justify-center gap-10 text-lg font-serif'>
          <div className='mx-2'>
            <input type="range" min={8} max={99} value={length} className='cursor-pointer mr-2' onChange={ e => setLength(e.target.value) }/>
            <label className='text-white'>Length : {length}</label>
          </div>
          <div className='mx-2'>
            <input type="checkbox" defaultChecked={hasNumbers} className='mr-2' onChange = { () => setHasNumbers(!hasNumbers) } />
            <label className='text-white'>Numbers</label>
          </div>
          <div className='mx-2'>
            <input type="checkbox" defaultChecked={hasCharacters} className='mr-2' onChange={() => setHasCharacters(!hasCharacters)} />
            <label className='text-white'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
