import React, { useRef ,useEffect} from 'react'

export default function Callbacks() {
    let backRef=useRef(null);
    // let setbackRef=element=>
    // {
    //     backRef=element;
    // }

    useEffect((event)=>
    {   
      event.preventDefault();
        backRef.current.focus();
    },[])
  return (
    <div>
      <form>
        Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" />
        <br /><br />
        Password:&nbsp;&nbsp; <input type="text" ref={backRef}/>
        <br /><br />
        <button >Submit</button>
      </form>
    </div>
  )

  // let inputRef= HTMLInputElement | null;

  // const onClick = () => {
  //     console.log('INPUT VALUE: ', inputRef?.value);
  // }

  // const onFocusClick = () => {
  //     console.log('Focus input');
  //     inputRef?.focus();
  // }
  // console.log('Rendering')
  // return (
  //     <div>
  //         <input ref={node => { inputRef = node; }} />
  //         <button onClick={onClick}>Log value</button>
  //         <button onClick={onFocusClick}>Focus on input</button>
  //     </div>
  // );


}
