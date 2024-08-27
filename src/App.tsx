import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const decreaseCount = (amount: number) => {
    setCount((count) => count <= amount ? count = 0 : count - amount)
  }

  return (
    <>
      <div>
        <h1>Selector!</h1>
        <h2>count is {count}</h2>
        <img className='selector' onClick={() => setCount((count) => count + (1 * multiplier))} src="https://www.theperfectloaf.com/wp-content/uploads/2015/12/theperfectloaf-mybestsourdoughrecipe-title-1-1080x864.jpg"/>
      </div>
      <div className='container'>
        <div className='item'>
          <h3>2x per click</h3>
          <button onClick={() => {
            if (count < 10) {
              return
            }
            setMultiplier((multiplier) => multiplier *= 2)
            decreaseCount(10)            
            }}> 10 loafs </button>
        </div>
        <div className='item'>
          <h3>5x per click</h3>
          <button onClick={() => {
            if (count < 100) {
              return
            }
            setMultiplier((multiplier) => multiplier *= 5)
            decreaseCount(100)
            }}> 100 loafs </button>
        </div>
        <div className='item'>
          <h3>10x per click</h3>
          <button onClick={() => {
            if (count < 1000) {
              return
            }
            setMultiplier((multiplier) => multiplier *= 10)
            decreaseCount(1000)
            }}> 1000 loafs </button>
        </div>
      </div>
    </>
  )
}

export default App
