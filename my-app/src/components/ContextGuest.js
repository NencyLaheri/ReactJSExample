import React,{useContext} from 'react'
import { Consumer } from './Contect'
import { MyContext } from './Contect'

export default function ContextGuest(props) {
  // const contextType=MyContext;
  const myContextValue = useContext(MyContext);
  return (
    <div>
      <h3>Guest component</h3>
      {/* <h5>{props.nm}</h5> */} 
     {/* <Consumer>
        {({data,data1,handleClick})=>(
        <div>
            <h4>Name: {data}</h4><br/>
            <h4>Value: {data1}</h4>
            <button onClick={handleClick}>Change value</button>
        </div>
        )}
      </Consumer> */}
      <div>
            <h4>Name: {myContextValue.data}</h4><br/>
            <h4>Value: {myContextValue.data1}</h4>
            <button onClick={myContextValue.handleClick}>Change value</button>
        </div>
    </div>
  )
}
