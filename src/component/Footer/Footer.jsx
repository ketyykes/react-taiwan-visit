import React from 'react'
import styles from './footer.module.scss'
const Footer = ({ menuValue }) => {
    const { display_none, display_block, } = styles
    return (
        <footer className={menuValue ? display_none : display_block}>
            TAIWAN TRAVEL
        </footer>
    )
}

export default Footer