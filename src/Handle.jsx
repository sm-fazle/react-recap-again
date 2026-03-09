import React, { useState } from 'react';
 
 
const Handle = () => {


    const[count, setCount]=useState(0);

   const styleHandle={
    border:'5px solid red',
    padding:'10px',
    width:'600px',
    height:'100px',
    backgroundColor:'aqua',
    textTransform:'uppercase',
    
   }
    const handleClick=()=>{
       const newCount=count+1;
       setCount(newCount)
    }
    return (
        <div>
            <h1 style={styleHandle}>count number: <span style={{color:'red',}}>{count}</span></h1>
         <button onClick={handleClick} style={{border:'3px solid red' , outline:'none',
            padding:'10px',width:'200px',height:'50px',backgroundColor:'aqua',
            
            }} >
                click me to count</button>
        </div>
    );
};

export default Handle;