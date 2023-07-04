import React,{useState} from 'react'
const Army=(Men,shots)=>
{
    function Hocomponent(props) {
    const [gunshots,setGunshots]=useState(0);
    const handleGunshots=()=>
    {
        setGunshots(gunshots+shots);
    }
    console.log(props.camp);
    return (
        <div>
            <Men hocgunshots={gunshots} handleclicke={handleGunshots} hocgunname="AK47" camp={props.camp}></Men>
        </div>
    )
    }
    return Hocomponent;
}
export default Army;