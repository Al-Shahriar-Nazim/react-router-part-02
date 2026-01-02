// import React, { use } from 'react';

import { use } from "react";

const UserDetails2 = ({ userPromised }) => {
  const user = use(userPromised);
  const { name, username } = user;

  return (
    <div
      style={{
        border: "1px solid crimson",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: "blue",
      }}
    >
      <h3>User details section two</h3>
      <p>Name:{name}</p>
      <p>
        <small>User Name :{username}</small>
      </p>
    </div>
  );
};

export default UserDetails2;
