import { useState } from "react";
export default function useCustomCounter()
{
    const [count,setCount]=useState(0);
    const incFunc=()=>
    {
        setCount(count+1);
    }
    return {
        count,incFunc
    }
}