import React from 'react'
import { logo, toggle } from '../../assets/images';
import styles from './logo.module.scss';

const Logo = ({ menuValueFunction }) => {
    const { wrap_logo, wrap_toggle } = styles;
    return (
        <div className={wrap_logo}>
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <button className={wrap_toggle} onClick={menuValueFunction}>
                <img src={toggle} alt="toggle" />
            </button>
        </div>
    )
}

export default Logo