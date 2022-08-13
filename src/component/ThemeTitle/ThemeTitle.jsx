import React from 'react'
import styles from './theme_title.module.scss';
import location_purple from '../../assets/images/location_purple.png';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeTitle } from '../../store/searchSlice'
const ThemeTitle = ({ visitType, title, moreQuery }) => {
    const { wrap_visit_type_title } = styles;
    const distpath = useDispatch();
    console.log(moreQuery);
    console.log(visitType);
    return (
        <div className={wrap_visit_type_title}>
            <h3>
                <img src={location_purple} alt="location" />
                {title}</h3>
            <p>
                <Link onClick={() => (distpath(changeTitle(title)))} to={`/search/${visitType}?${moreQuery}`}>
                    更多{title}
                </Link>
            </p>
        </div>
    )
}
export default ThemeTitle