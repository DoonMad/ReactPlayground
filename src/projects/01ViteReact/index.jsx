import './style.css'
import {useState} from 'react'
import Comp from './Comp';

function App() {

  let [count, setCount] = useState(0);
  let [msg, setMsg] = useState('');

  const add = () => {
    setCount(count+1);
    if(msg != '') setMsg('');
  }
  const sub = () => {
    if(count>0) setCount(count-1);
    else setMsg('Counter cannot go below 0 :")');
  }

  return (
    <div className='max-w-[80vw] place-items-center justify-center'>
      <h1>
        Hello World
      </h1>
      <p>Counter: {count}</p>
      <p>{msg}</p>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <Comp />
    </div>
  )
}

export default App
