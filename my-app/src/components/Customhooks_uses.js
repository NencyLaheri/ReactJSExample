import React from 'react'
import useCustomCounter from './customHooks'
export default function Customhooks_uses() {
    const data=useCustomCounter();
  return (
    <div>
      <h1>count Up: {data.count}</h1>
      <button type='button' onClick={data.incFunc}>Incerement</button>
    </div>
  )
}
