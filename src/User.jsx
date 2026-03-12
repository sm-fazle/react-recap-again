import React from 'react';

const User = ({use}) => {
    const {username,name,email }=use;



    return (
        <div className='userss' style={{border:'5px solid red', backgroundColor:'green', color:'black', marginTop:'10px'}}>
             <h1>name: {name}</h1>
            <h2>username: {username}</h2> 
            <h2>email: {email}</h2> 
            
        </div>
    );
};

export default User;