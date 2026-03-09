
import React from 'react';

const ToDo = ({isDone,roll,name,task}) => {
//     return  (
//         <div>
//             {/* <div className='student' style={{border:'5px solid aqua', margin:'5px', width:'300px', padding:'5px'}}>
    
//     <h2>name:{name}</h2>
//     <h3 style={{fontSize:'50px', color:'red'}}>roll:{roll}</h3>
//     <h1>dept:{dept}</h1>
   
// </div> */}
// {/* conditional rendaring / condition? true:false */}
          
//         </div>
//     );

// return isDone? <li> <span style={{textTransform:'capitalize', fontSize:'20px', color:'green'}}>done by</span> {name} {roll}✅✅</li> :
// <li style={{textTransform:'capitalize', fontSize:'20px', color:'red'}}>please complete❌💔</li>
// };
// return isDone && <li> <span style={{textTransform:'capitalize', fontSize:'20px', color:'green'}}>done by</span> {name} {roll}✅✅</li> 
// only true will return
// {/* <li style={{textTransform:'capitalize', fontSize:'20px', color:'red'}}>please complete❌💔</li> */}


return isDone|| <li style={{textTransform:'capitalize', fontSize:'20px', color:'red'}}>not done:{name}  {roll}  {task} ❌💔 </li>

};

export default ToDo;