import React, { use } from 'react';

const AlbumDetails2 = ({albumPromised}) => {
    const album = use(albumPromised);
    // console.log(album)
    const{title} = album;
    const albumstyle = {
        border:"1px solid white",
        margin:'10px',
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"crimson"
    }
    return (
        <div style={albumstyle}>
            <h3>Album details two</h3>
            <p>{title}</p>
        </div>
    );
};

export default AlbumDetails2;