import React from 'react'
import styles from './aside.module.scss';
import { Logo, Sidebar } from '../index.js'
const Aside = ({ menuValueFunction, menuValue }) => {
    const { aside } = styles;
    return (
        <aside className={aside}>
            <Logo menuValueFunction={menuValueFunction} />
            <Sidebar menuValue={menuValue} menuValueFunction={menuValueFunction} />
        </aside>
    )
}

export default Aside