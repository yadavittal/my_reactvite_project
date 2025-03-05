import React, { useState } from 'react'

function Counter() {
  

    const [count, setCount] = useState(0)
    const [error,setError]  = useState(false)

    const handleClick = ()=>{
          setCount(count+1)
    }
    const handleClick1 = ()=>{
          setCount(count-1)
    }

  return (
    <div>
          <button onClick={handleClick}>Increment</button>
          <p>{count}</p>
          <button onClick={handleClick1}>Decrement</button>
    </div>
  )
}

export default Counter
