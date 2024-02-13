import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGeolocation } from "@uidotdev/usehooks";

const APIKEY = import.meta.env.VITE_REACT_APP_APIKEY
function App() {
  const [count, setCount] = useState(0)
  const state = useGeolocation();
  console.log(state)

  return (
    <div>
      {APIKEY}
    </div>
  )
}

export default App
