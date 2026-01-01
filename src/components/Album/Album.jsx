import React from 'react';
import { Link } from 'react-router';

const Album = ({album}) => {
    const {title,id} = album;
    return (
        <div style={{border:"1px solid crimson"}}>
            <h3>{title}</h3>
            <Link to={`/albums/${id}`}>
            <button>Show details</button>
            </Link>
        </div>
    );
};

export default Album;