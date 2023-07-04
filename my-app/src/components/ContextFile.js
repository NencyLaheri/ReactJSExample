import React,{createContext, useState} from 'react'
import ContextUser from './ContextUser';
import { Provider } from './Contect';
export const MyContext=createContext()
export default function ContextFile() {
    const [name,setName]=useState("hello");
    const [val,setVal]=useState(10);
   
    const handleClicked=()=>
    {
        setName("Riya");
        setVal(val+1);
    }
    const contextValue=
    {
        data:name,
        data1:val,
        handleClick:handleClicked
    }
  return (
    <div>
      {/* <ContextUser name={name}></ContextUser> */}
    <Provider value={contextValue}>
        <ContextUser></ContextUser>
    </Provider>
    </div>
  )
}
