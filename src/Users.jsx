import React, { use } from 'react';
import User from './User';

const Users = ({users}) => {

    const UsersPromise=use(users);
    // const {name, email}=UsersPromise;
    return (
        <div>
            <h1>total user: {UsersPromise.length} </h1>;
        
            {
                UsersPromise.map(use=> <User key={use.id} use={use}></User>)
            }
        </div>
    );
};

export default Users;