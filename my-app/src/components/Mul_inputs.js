import React ,{useState}from 'react'

export default function Mul_inputs() {
    const [name,setName]=useState("hello");
    const [pass,setPass]=useState("world");
    

    const handleName=(event)=>
    {
        setName(event.target.value);
        console.log("name...",event.target.value)
    }
    const handlepass=(event)=>
    {
        setPass(event.target.value);
        console.log("password",event.target.value)
    }

    // const handleChange=(event)=>
    // {
    //     // setName(event.target.value)
    //     // setPass(event.target.value)
    //     // console.log(event.target.name);
    //     event.target.name==="name" ?
    //     setName(event.target.value): setPass(event.target.value);
        
        
    // }
  return (
    <div>
      <form>
        <label>
            Name: <input type="text" value={name} name="Name" onChange={handleName}/>
        </label>
        <br /><br />
        <label>
            Password: <input type="text" value={pass} name="password" onChange={handlepass}/>
        </label>
      </form>
    </div>
  )
}
