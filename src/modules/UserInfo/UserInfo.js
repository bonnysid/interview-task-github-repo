import React from 'react';

const UserInfo = ({user}) => {
    return (
        <div>
            <img src={user.avatar_url} alt="avatar"/>
            <p>{user.name}</p>
            <h2>{user.login}</h2>
            <div>

            </div>
        </div>
    )
}

export default UserInfo;