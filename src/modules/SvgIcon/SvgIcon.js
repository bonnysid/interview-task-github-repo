import React from 'react';
import s from './SvgIcon.module.css'
import icons from '../../assets/icons.svg';

const SvgIcon = ({id, title, value, color, className, ...props}) => {
    return (
        <div className={s.container}>
            <svg xlinkTitle={title} className={className || s.icon} fill={color} {...props}>
                <use xlinkHref={`${icons}#${id}`}/>
            </svg>
            {value && <p className={s.iconText}>{value}</p>}
        </div>
    )
}

export default SvgIcon;