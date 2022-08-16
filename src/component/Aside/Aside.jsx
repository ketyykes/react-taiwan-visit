import React from 'react'
import styles from './aside.module.scss';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar'
const Aside = ({ menuValueFunction, menuValue }) => {
    const { aside } = styles;
    return (
        <aside className={aside}>
            <Logo menuValueFunction={menuValueFunction} />
            <Sidebar menuValue={menuValue} />
        </aside>
    )
}

export default Aside