import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const navigate = useNavigate();
    const user = useLoaderData();
    // console.log(user)
    const {website,name}= user;
    return (
        <div>
            <h3>this user details section</h3>
            <h5>{name}</h5>
            <p>{website}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;