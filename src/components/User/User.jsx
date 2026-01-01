import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUsers from '../SingleUser/SingleUsers';

const User = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h3>this user section</h3>
            {
                users.map(user=><SingleUsers user={user} key={user.id}></SingleUsers>)
            }
        </div>
    );
};

export default User;