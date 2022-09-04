import React from 'react'
import { logo, toggle } from '../../assets/images';
import { Link } from "react-router-dom";
import styles from './logo.module.scss';

const Logo = ({ menuValueFunction }) => {
    const { wrap_logo, wrap_toggle } = styles;
    return (
        <div className={wrap_logo}>
<<<<<<< HEAD
            <Link to="/react-taiwan-visit/">
=======
            <Link to="/react-taiwan-visit">
>>>>>>> 8a75d7858b173d2b47a8c80a2ef020a03b0f0325
                <img src={logo} alt="logo" />
            </Link>
            <button className={wrap_toggle} onClick={menuValueFunction}>
                <img src={toggle} alt="toggle" />
            </button>
        </div>
    )
}

export default Logo