import React from 'react';
import {useState, useEffect} from 'react';
import GitAPI from '../../api/GitAPI';

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
        <div>
            <input type='text' value={text} onChange={onTextChange}/>
            <button onClick={(e) => getUserInfo(text)}>Show</button>
        </div>
    )
}

export default Header;