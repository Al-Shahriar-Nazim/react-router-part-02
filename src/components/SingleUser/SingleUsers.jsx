import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const SingleUsers = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };
  const { name, email, phone, id } = user;
  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  const userPromised = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email :{email}</p>
      <p>
        <small>Phone:{phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>

      <button onClick={handleNavigate}>Details of:{id}</button>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide" : "Show"} info
      </button>
      <div>
        {showInfo && (
          <Suspense fallback={<span>Loading....</span>}>
            <UserDetails2 userPromised={userPromised}></UserDetails2>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default SingleUsers;
