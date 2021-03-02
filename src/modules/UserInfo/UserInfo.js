import React from 'react';
import s from './UserInfo.module.css';
import SvgIcon from "../SvgIcon/SvgIcon";

const UserInfo = ({user}) => {
    return (
        <div className={`block ${s.container}`}>
            <img className={s.avatar} src={user.avatar_url} alt="avatar"/>
            <p className={s.name}>{user.name}</p>
            <h2 className={s.login}>{user.login}</h2>
            <div className={s.repoInfo}>
                <SvgIcon id={'git-face'} value={user.followers} title={'followers'}/>
                <SvgIcon id={'repo'} value={user.public_repos} title={'repositories'}/>
                <SvgIcon id={'following'} value={user.following} title={'following'}/>
            </div>
        </div>
    )
}

export default UserInfo;