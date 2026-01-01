import React from 'react';
import { useLoaderData } from 'react-router';

const AlbumsDetails = () => {
    const user = useLoaderData();
    const {title}=user;
    return (
        <div style={{border:"1px dotted white", margin:"10px",padding:"10px"}}>
            <h3>Albums details section</h3>
            <p>{title}</p>
        </div>
    );
};

export default AlbumsDetails;