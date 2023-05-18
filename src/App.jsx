import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <svg className='w-[500px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100">
            <rect x="0" y="0" width="1000" height="1000" fill="#1dbaf3" />
            <circle cx="50" cy="50" r="30" fill="red" />
            <path d="M50 80 L50 45 L80 50 L50 55 L20 50 Z" fill="#FF4C4C" />
            <text x="50%" y="52%" textAnchor="middle" fill="black" fontFamily="Arial" fontSize="22" fontWeight="bold">
              Toyland
            </text>
            <text x="50%" y="60%" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="16">
              Junction
            </text>
          </svg>


      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
