import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)
    const {website,name}= user;
    return (
        <div>
            <h3>this user details section</h3>
            <h5>{name}</h5>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;