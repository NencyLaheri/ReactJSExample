import React,{useState} from 'react'

export default function Handling_form() {
  
  // const [name,setName]=useState();
  // const [pass,setPass]=useState();

  // const initialvalues = {
  //   name: "",
  //   pass: ""
  // };
  const [data, setData] = useState({name: "",pass: ""});

  const handleSubmit=(event)=>
  {
    event.preventDefault();
    // const name=event.target.name;
    // const value=event.target.value;
    //  setData({...data,[event.target.name]:event.target.value})
    //  console.log("name:-------",event.target.value);
    console.log("name:",data.name);
    console.log("password:",data.pass);
  }
  const handleChange=(event)=>
  {
    setData({...data,[event.target.name]:event.target.value})
    console.log(event.target.name,"-----",event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label>
            {/* Name: <input type="text" value={data.name} name="Name" onChange={event=>setName(event.target.value)}/> */}
            Name: <input type="text" value={data.name} name="name" onChange={handleChange}/>
        </label>
        <br /><br />
        <label>
            Password: <input type="text" value={data.pass} name="pass" onChange={handleChange}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
