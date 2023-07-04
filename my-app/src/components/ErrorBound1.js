import React from 'react'

export default function ErrorBound1(props) {
    if (props.i1==="NoImage") {
      throw new Error("image not found")      
    }
  return (
    <div>
        
        <img src={props.i1} height="200" width="150"/>
        {/* <img src={props.i2} height="200px" /> */}
    </div>
  )
}
