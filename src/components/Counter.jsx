import React, { useState } from 'react'

function Counter() {
  

    const [count, setCount] = useState(null)

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
