import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

export default function DigitalClock() {
  const {name,lname}=useParams();
    let newTime=new Date().toLocaleTimeString();
    const [ctime, setctime] = useState(newTime);
    const handleClick=(event)=>
    {
        newTime=new Date().toLocaleTimeString();
        setctime(newTime);
    }
    
  return (
    <div>
      <h1>Params {name} {lname} in page </h1>
      <h1>{ctime}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  )
}
