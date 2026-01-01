import React, { use } from 'react';

const User2 = ({userPromised}) => {
    const users = use(userPromised);
    console.log(users)
    return (
        <div>
            <h3>this user 2 section</h3>
        </div>
    );
};

export default User2;