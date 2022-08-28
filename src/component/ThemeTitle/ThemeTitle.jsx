import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from './theme_title.module.scss';
import location_purple from '../../assets/images/location_purple.png';
import { changeTitle } from '../../store/searchSlice'
const ThemeTitle = ({ visitType, title, moreQuery }) => {
    const { wrap_visit_type_title } = styles;
    const distpath = useDispatch();
    return (
        <div className={wrap_visit_type_title}>
            <h3>
                <img src={location_purple} alt="location" />
                {title}</h3>
            <p>
                <Link onClick={() => (distpath(changeTitle(title)))} to={`/search/${visitType}/all/1?${moreQuery}`}>
                    更多{title}
                </Link>
            </p>
        </div>
    )
}
export default ThemeTitle