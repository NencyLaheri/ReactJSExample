import React,{useState} from 'react'
import LiftingUser from './LiftingUser';
import LiftingGuest from './LiftingGuest';

export default function LiftingState() {
    const [name,setName]=useState("hello");
  return (
    <div>
      <LiftingUser name={name}></LiftingUser>
      <LiftingGuest name={name}></LiftingGuest>
    </div>
  )
}
