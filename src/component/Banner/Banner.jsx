import React from 'react'
import styles from './banner.module.scss';
import banner from '../../assets/images/banner.png'
const Banner = () => {
    const { wrap_banner, wrap_banner_image } = styles;
    return (
        <div className={wrap_banner}>
            <h1>探索。<br />
                福爾摩沙
            </h1>
            <div className={wrap_banner_image}>
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Banner