import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';
import banner from '../../assets/images/banner.png';
const Card = ({ placeDatum, visitType, children }) => {
    const { card, wrap_img } = styles;
    const navigate = useNavigate();
    const handleError = (e) => {
        e.currentTarget.src = banner;
    }
    const clickCardHandle = () => {
        const id = placeDatum[`${visitType}ID`]
        let url = `${visitType}?$filter=${visitType}ID eq '${id}'`;
        navigate(`/detail/${url}`);
    }
    // console.log(palceDatum);
    // card不要共用到太複雜，而是別人給他什麼 他就渲染成什麼
    return (
        <div className={card} onClick={clickCardHandle}>
            <div className={wrap_img}>
                <img src={placeDatum.Picture.PictureUrl1} onError={(error) => handleError(error)} alt="" />
            </div>
            <p>{placeDatum[`${visitType}Name`]}</p>
            {children}
        </div>
    )
}

export default Card