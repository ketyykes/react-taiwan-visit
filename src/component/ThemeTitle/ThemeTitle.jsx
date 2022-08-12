import React from 'react'
import styles from './theme_title.module.scss';
import location_purple from '../../assets/images/location_purple.png'
const ThemeTitle = ({ visitType, title, moreQuery }) => {
    const { wrap_visit_type_title } = styles;
    console.log(moreQuery);
    console.log(visitType);
    return (
        <div className={wrap_visit_type_title}>
            <h3>
                <img src={location_purple} alt="location" />
                {title}</h3>
            <p>更多{title}</p>
        </div>
    )
}
export default ThemeTitle