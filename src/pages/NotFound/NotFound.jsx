import React from 'react'
import styles from './notfound.module.scss';
import { useToggle } from '../../hook';
import { Aside, Header, Banner, Footer } from '../../component'

const NotFound = () => {
    const {
        display_none, display_block,
        container, article } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);

    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header menuValue={menuValue} >
                <Banner />
            </Header>
            {/* <article className={`${article} ${menuValue ? display_none : display_block}`}>
            </article> */}
            <Footer menuValue={menuValue} />
        </div >
    )
}

export default NotFound