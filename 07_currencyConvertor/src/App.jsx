import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import { useState } from 'react'
import BG from './assets/BG.jpeg'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-cover' style={{backgroundImage: `url(${BG})`}}>
        <div className='w-4/12 h-80 md:h-96 rounded-3xl backdrop-blur-md bg-white/10 border-2 border-white/30'>
            <InputBox 
              label='From'
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <button 
            type='button'
            onClick={swap}
            className='w-16 h-10 absolute left-1/2 -translate-x-1/2 -translate-y-3/4 border-2 border-white rounded-md bg-blue-600 active:bg-blue-700 text-white px-2 py-0.5'>
              swap
            </button>
            <InputBox 
              label='To'
              amount={convertedAmt}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              onAmountChange={convert}
            />
            <div className='m-6'>
              <button
                onClick={convert}
                className='w-full h-16 rounded-xl text-white text-xl bg-blue-600  active:bg-blue-700'>
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
