import { use, useState } from 'react';
import './Footer.css';

function Footer() {
    const [color, setColor] = useState('black')

  return (
  <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-12 rounded-full inset-x-0' style={{backgroundColor: '#313131'}}>
      <button onClick={() => setColor('red')} className='w-23 rounded-full text-white bg-red-500 hover:bg-red-600 p-3 m-3'>Red</button>
      <button onClick={() => setColor('orange')} className='w-23 rounded-full text-white bg-orange-500 hover:bg-orange-600 p-3 m-3'>Orange</button>
      <button onClick={() => setColor('green')} className='w-23 rounded-full text-white bg-green-500 hover:bg-green-600 p-3 m-3'>Green</button>
      <button onClick={() => setColor('blue')} className='w-23 rounded-full text-white bg-blue-500 hover:bg-blue-600 p-3 m-3'>Blue</button>
      <button onClick={() => setColor('olive')} className='w-23 rounded-full text-white bg-lime-800 hover:bg-lime-900 p-3 m-3'>Olive</button>
      <button onClick={() => setColor('gray')} className='w-23 rounded-full text-white bg-gray-500 hover:bg-gray-600 p-3 m-3'>Grey</button>
      <button onClick={() => setColor('yellow')} className='w-23 rounded-full text-white bg-yellow-500 hover:bg-yellow-600 p-3 m-3'>Yellow</button>
      <button onClick={() => setColor('pink')} className='w-23 rounded-full text-white bg-pink-500 hover:bg-pink-600 p-3 m-3'>Pink</button>
      <button onClick={() => setColor('purple')} className='w-23 rounded-full text-white bg-purple-500 hover:bg-purple-600 p-3 m-3'>Purple</button>
      <button onClick={() => setColor('lavender')} className='w-23 rounded-full text-black bg-fuchsia-200 hover:bg-fuchsia-300 p-3 m-3'>Lavender</button>
      <button onClick={() => setColor('white')} className='w-23 rounded-full text-black bg-white hover:bg-slate-200 p-3 m-3'>White</button>
      <button onClick={() => setColor('black')} className='w-23 rounded-full text-white bg-black hover:bg-black/80 p-3 m-3'>Black</button>
    </div>
  </div>
  );
}

export default Footer
v

