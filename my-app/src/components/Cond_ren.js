import React from 'react'

export default function Cond_ren(props) {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <button className='btn btn-primary mx-2' onClick={props.clickdata}>Logout</button>
      
    </div>
  )
}
