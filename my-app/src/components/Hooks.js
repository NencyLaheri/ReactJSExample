import React,{useState,useEffect} from 'react'
export default function Hooks() {
  const [count,setCount]=useState(0);
  const [count1,setCount1]=useState(50);
  const incFunc=()=>
  {
    setCount(count+1);
  }

  const decFunc=()=>
  {
    setCount1(count1-1);
  }
  useEffect(()=>{
    console.log("use effect called")
  },[count,count1])
  return (
    <div>
      <h1>count Up:{count}</h1>
      <button type='button' onClick={incFunc}>Increment</button>
      <h1>count Down:{count1}</h1>
      <button type='button' onClick={decFunc}>Decrement</button>
    </div>
  )
}
