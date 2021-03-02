import React from 'react';
import s from './SvgIcon.module.css'
import icons from '../assets/icons.svg';

const SvgIcon = ({id, title, value, color}) => {
    return (
        <div className={s.container}>
            <svg xlinkTitle={title} className={s.icon} fill={color}>
                <use xlinkHref={`${icons}#${id}`}/>
            </svg>
            <p className={s.iconText}>{value}</p>
        </div>
    )
}

export default SvgIcon;