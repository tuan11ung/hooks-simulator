'use client'

import { useState } from "react"

export default function UseStateDemo() {
  const [count, setCount] = useState<number>(0)

  const handleIncrese = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }
  
  return (
    <div className="p-4">
      <h1>useState Demo</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrese}>+</button>
      <button onClick={handleDecrease}>-</button>

    </div>
  )
}

