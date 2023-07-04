import React,{useState} from 'react'
import Cond_ren from './Cond_ren'
import Cond_ren1 from './Cond_ren1'

export default function Cond(props) {
    // const isRegistered=props.consumer;
    // if(isRegistered)
    // {
    //     return <Cond_ren></Cond_ren>
    // }
    // else
    // {
    //     return <Cond_ren1/>
    // }

    // --------------
    // const isprimeMember=props.primeMember;
    // return(
    //     <div>
    //         <h1>Welcome user</h1>
    //         {isprimeMember && <Cond_ren1></Cond_ren1>}
            
    //     </div>
    // )


    // --------------
    const [isLoggedIn,setState]=useState(true);
    // const state={isLoggedIn:true}
    let consumer;
    const clickLogin=()=>{
        setState(true)
    }
    const clickLogout=()=>{
        setState(false)
    }
    // if(isLoggedIn)
    // {
    //     // return <Cond_ren name="Riya" clickdata={clickLogout}></Cond_ren>
    //     consumer=<Cond_ren name="Riya" clickdata={clickLogout}></Cond_ren>
    // }
    // else
    // {
    //     // return <Cond_ren1 clickdata={clickLogin}/>
    //     consumer=<Cond_ren1 clickdata={clickLogin}/>
    // }

    

    return(
        <div>
            {/* {consumer} */}
            {isLoggedIn ? (<Cond_ren clickdata={clickLogout}/>) : (<Cond_ren1 clickdata={clickLogin}/>)}
        </div>
    )
}
