import React from 'react';
import s from './StartPage.module.css'
import SvgIcon from "../SvgIcon/SvgIcon";

const StartPage = (props) => {
    return (
        <main className={s.container}>
            <SvgIcon id={'subs'} className={s.icon}/>
            <h1 className={s.text}>Input user name!</h1>
        </main>
    )
}

export default StartPage;