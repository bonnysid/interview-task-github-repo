import React from 'react';
import {useState, useEffect} from 'react';
import GitAPI from '../../api/GitAPI';
import s from './Header.module.css';

const Header = (props) => {
    const [text, setText] = useState('');

    const onTextChange = (e) => {
        setText(e.target.value);
    }

    const getUserInfo = async (user) => {
        const responseUser = await GitAPI.getUser(user);
        const responseRepos = await GitAPI.getUserRepositories(user);
        props.setUserData(responseUser.data);
        props.setRepos(responseRepos.data);
    }

    return (
        <header className={s.container}>
            <input className={`input`} type='text' value={text} onChange={onTextChange}/>
            <button className={`btn ${s.btn}`} onClick={(e) => getUserInfo(text)}>Show</button>
        </header>
    )
}

export default Header;