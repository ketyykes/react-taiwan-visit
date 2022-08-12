import React from 'react';
import styles from './card.module.scss';
import banner from '../../assets/images/banner.png';
const Card = ({ palceDatum, children }) => {
    const { card, wrap_img } = styles;
    const handleError = (e) => {
        console.log(e);
        e.currentTarget.src = banner;
    }
    // card不要共用到太複雜，而是別人給他什麼 他就渲染成什麼
    return (
        <div className={card}>
            <div className={wrap_img}>
                <img src={palceDatum.Picture.PictureUrl1} onError={(error) => handleError(error)} alt="" />
            </div>
            {children}
        </div>
    )
}

export default Card