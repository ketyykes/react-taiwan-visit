import React from 'react';
import styles from './header.module.scss'

const Header = ({ menuValue, children }) => {
    const { header, display_none, display_block } = styles
    return (
        <header className={`${header} ${menuValue ? display_none : display_block}`}>
            {children}
        </header>
    )
}

export default Header