import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Greeting from './Greeting'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };


  return (
    <>
    <h1>React Counter Application</h1>
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className='buttons'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      
    </div>
    </>
  )
}

export default App
