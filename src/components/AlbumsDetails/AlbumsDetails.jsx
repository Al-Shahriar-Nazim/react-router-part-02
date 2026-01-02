import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const AlbumsDetails = () => {
    const navigate = useNavigate();
    const user = useLoaderData();
    const {title}=user;
    return (
        <div style={{border:"1px dotted white", margin:"10px",padding:"10px"}}>
            <h3>Albums details section</h3>
            <p>{title}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default AlbumsDetails;