import React, { useRef } from 'react'

export default function Uncontrolled_form() {
  
  const textInput=useRef(null);
  const passInput=useRef(null);

  const handleChange=(event)=>
  {
    event.preventDefault();
    console.log("Name:---",textInput.current.value)
    console.log("Password:---",passInput.current.value)
  }
  return (
    <div>
      <form onSubmit={handleChange}> 
        <label>
            Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="name" ref={textInput}/>
        </label>
        <br /><br />
        <label>
            Password: &nbsp;
            <input type="text"  name="pass" ref={passInput}/>
        </label>
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
