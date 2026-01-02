import React, { Suspense, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import AlbumDetails2 from "../AlbumDetails2/AlbumDetails2";

const Album = ({ album }) => {
  const [showInfo, setShowInfo] = useState(false);
  const[takeHome,setTakeHome] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/albums/${id}`);
  };
  const { title, id } = album;
  const albumPromised = fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  ).then((res) => res.json());

  if(takeHome){
return <Navigate to='/'></Navigate>
  }
  return (
    <div style={{ border: "1px solid crimson" }}>
      <h3>{title}</h3>
      <Link to={`/albums/${id}`}>
        <button>Show details</button>
      </Link>
      <button onClick={handleNavigate}>Details of:{id}</button>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} Info
      </button>
            <button onClick={()=>setTakeHome(true)}>Take Home</button>
      <div>
        {showInfo && (
          <Suspense fallback={<span>Loading....</span>}>
            <AlbumDetails2 albumPromised={albumPromised}></AlbumDetails2>
          </Suspense>
        )}
      </div>

    </div>
  );
};

export default Album;
