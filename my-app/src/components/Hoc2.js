import React,{useState} from 'react'
import Army from './Hocomponent';

function Hoc2(props) {
    // console.log(props.camp);
    return (
    <div>
    <h4>Camp: {props.camp}</h4>
    <h5 onMouseOver={props.handleclicke}>Hoc2 {props.hocgunname} Gunshots: {props.hocgunshots}</h5>
    </div>
  )
}
export default Army(Hoc2,1)