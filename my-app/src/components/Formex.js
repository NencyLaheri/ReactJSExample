import React,{useState} from 'react'

export default function Formex() {
    // const [value,setValue]=useState("hello world");
    const [value,setValue]=useState("hello there, this is sme text in a text area");
    // const handleValue=(event)=>
    // {
    //     // setValue(event.target.value)
    //     console.log("value...",event.target.value)
    //     setValue(event.target.value.toUpperCase().substr(0,10));
    // }
    const handleValue= event =>
    {
        setValue(event.target.value)
        console.log("value...",event.target.value)
        
    }
  return (
    <div>
      <form>
        <h4> Controlled by React</h4>
        <textarea type="text" value={value} onChange={handleValue}/>
      </form>
    </div>
  )
}
