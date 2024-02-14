import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  // let count = 0
  let [count, setcount]= useState(0)
  let handlebtn = ()=>{
    count++
    setcount(count)
    console.log(count)
  }
  let decrementbtn = ()=>{
    count--
    setcount(count)
    console.log(count)
  }
 
  return (
    <>
  
    
      <h2> {count} </h2>
      <button onClick={handlebtn}>increment</button>
      <button onClick={decrementbtn}>decrement</button>
    </>
  )
}

export default App
