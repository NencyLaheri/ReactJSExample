import React from 'react'

export default function Lists(props) {
    // const arr=props.numbers;
    // const newarr=arr.map((num)=>{
    //   console.log("Num= ",num)
    //   return <li>{num*2}</li>
    // })
    // console.log("oldarr=",arr);
    // console.log("newarray=",newarr)

  // -------------------
  //   const state={users:[
  //     {id:101,name:"abc",password:'asdfghj'},
  //     {id:102,name:"pqr",password:'zxcvb'},
  //     {id:103,name:"xyz",password:'qwert'},
  //   ],
  //   isLoggedin:false
  // }
  // const newarray=state.users.map((u)=>{
  //   return <h3 key={u.id}>ID: {u.id}  Name: {u.name}  Password: {u.password}</h3>
  // })

  // ------------------
  const arr=props.numbers;
  console.log(arr);
  const newArr=arr.map((num)=>
  {
    return <li key={num}>{num}</li>    
  })
  return (
    <div>
      {/* <ul> */}
        {/* {newarr} */}
        {/* {arr.map((num)=>{return <li>{num*2}</li>})} */}
      {/* </ul> */}
      {/* <h3>{state.users[0].id}</h3> */}

    {newArr}
    </div>
  )
}
