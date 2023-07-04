import React,{useState} from 'react'

export default function Error() {
    [hasError,sethasError]=useState(false);
    if(hasError)
    {
        return <h3>Error: Image not found</h3>
    }
    try 
    {
        // return <WrappedComponent {...props} />;
    } 
    catch (err) 
    {
        sethasError(true);
    }
  return (
    
    <div>
      
    </div>
  )
}
