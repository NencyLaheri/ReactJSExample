import React,{useState} from 'react'

export default function Example() {
    const [bgcolor, setbgcolor] = useState("slategrey");
    const [name, setName] = useState("Click Me");
    const handleClick=()=>
    {
        console.log("clicked")
        setbgcolor("green")
        setName("Clicked")
    }
    const handledbClick=()=>
    {
        console.log("clicked")
        setbgcolor("yellow")
        setName("Double Clicked")
    }
  return (
    <div >
      <button style={{backgroundColor:bgcolor}} onDoubleClick={handledbClick} onClick={handleClick}>{name}</button>
    </div>
  )
}
