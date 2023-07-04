import React from 'react'

export default function Cond_ren1(props) {
  return (
    <div>
      <h1>Welcome pqr</h1>
      <button className='btn btn-primary mx-2' onClick={props.clickdata}>Login</button>
      <button className='btn btn-primary mx-2'>Sign up</button>
     
      {/* <h1>Prime Member</h1> */}
    </div>
  )
}
