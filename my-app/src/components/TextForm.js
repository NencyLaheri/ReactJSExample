import React,{useState } from 'react'

export default function TextForm(props) {
const [text,setText]=useState("");
const handleClick=()=>
{
    console.log("uppercase was clicked " +text);
    let newText=text.toUpperCase();
    setText(newText);
}
const handleClick1=()=>
{
    console.log("lowercase was clicked " +text);
    let newText=text.toLowerCase();
    setText(newText);
}
const handleChange=(event)=>
{
    console.log("on change ");
    setText(event.target.value);
}

const handleclear=(event)=>
{
    let newText="";
    setText(newText);
}
// setText("state changed");
  return (
    <>
    <div className='container'>
    <h3>{props.heading} </h3>
    <div className="mb-3">
        {/* <label for="examplete" class="form-label">Enter Your Text Here</label> */}
        <textarea className="form-control" value={text} onChange={handleChange} id="examplete" rows="5"/>
    </div>
    <button className="btn btn-primary mx-3 " onClick={handleClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleClick1}>Convert to lowercase</button>
    <button className="btn btn-primary mx-3" onClick={handleclear}>clear text</button>
    </div>
    <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
