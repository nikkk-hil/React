import './App.css'
import Card from './components/Card.jsx'
import pfp1 from './assets/pfp.png'
import pfp2 from './assets/image.png'

function App() {
  return (
    <>
      <h1 className='bg-blue-600 p-4 rounded-xl font-bold'>Tailwind CSS</h1>
      <Card username="Nikhil Soni" image={pfp1} occupation="Developer" />
      <Card username="Tame Impala" image={pfp2} occupation="Singer" />
    </>
  )
}

export default App
