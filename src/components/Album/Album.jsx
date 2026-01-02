import React from 'react';
import { Link, useNavigate } from 'react-router';

const Album = ({album}) => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(`/albums/${id}`)
    }
    const {title,id} = album;
    return (
        <div style={{border:"1px solid crimson"}}>
            <h3>{title}</h3>
            <Link to={`/albums/${id}`}>
            <button>Show details</button>
            </Link>
               <button onClick={handleNavigate}>Details of:{id}</button>
        </div>
    );
};

export default Album;