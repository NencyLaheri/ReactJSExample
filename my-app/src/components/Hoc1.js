import React,{useState} from 'react'
import Army from './Hocomponent';

function Hoc1(props) {
    
  return (
    <div>
        <h4>Camp: {props.camp}</h4>
      <h5 onMouseOver={props.handleclicke}>Hoc1 {props.hocgunname} Gunshots: {props.hocgunshots}</h5>
    </div>
  )
}

export default Army(Hoc1,10);

//this is the new repo 