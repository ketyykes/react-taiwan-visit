import React, { useState } from 'react'
import styles from './sidebar.module.scss';
import magnifying from '../../assets/images/magnifying.png'
import drop_down from '../../assets/images/drop_down.png'
import allCityArray from '../../assets/allCityArray';
import allThemeArray from '../../assets/allThemeArray';
import useToggle from '../../hook/useToggle.js';

const Sidebar = ({ menuValue }) => {
    const {
        wrap_destination_city,
        serch_keyword,
        sidebar,
        search_input,
        destination_button,
        destination_button_turn,
        sidebar_show,
        best_title,
        best_topic,
        select_theme,
        destination_show,
        select_city,
    } = styles;
    const initialSelectThemeValue = {
        title: "",
        chineseName: "全部",
        image: null,
        visitType: "ScenicSpot",
        queryObject: {
            $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
            $filter: `Picture/PictureUrl1 ne null`,
        }
    };
    const initialSelectCityValue = {
        chineseName: "目的地"
        , urlPathName: ""
    };
    const [distnationValue, distnationFunction] = useToggle(false);
    const [selectThemeValue, setSelectThemeValue] = useState(initialSelectThemeValue);
    const [selectCityValue, setSelectCityValue] = useState(initialSelectCityValue);
    const selectThemeHandler = (themeItem) => {
        setSelectThemeValue((preState) => (preState === themeItem ? initialSelectThemeValue : themeItem));
    }
    const selectCityHandler = (e) => {
        setSelectCityValue({ chineseName: e.target.textContent, urlPathName: e.target.value })
    }
    return (
        <div className={`${sidebar} ${menuValue ? sidebar_show : ""}`}>
            <div className={search_input}>
                <button className={`${destination_button} ${distnationValue ? destination_button_turn : ""}`} onClick={distnationFunction}>
                    目的地
                    <img src={drop_down} alt="drop_down" />
                </button>
                <div className={serch_keyword}>
                    <input type="text" placeholder='搜尋關鍵字' />
                    <img src={magnifying} alt="search" />
                </div>
                <div className={`${wrap_destination_city} ${distnationValue ? destination_show : ""}`}>
                    {allCityArray.map((city, index) => {
                        return (<button key={index} value={city.urlPathName}
                            className={city.urlPathName === selectCityValue.urlPathName ? select_city : null}
                            onClick={selectCityHandler} > {city.chineseName}</button>)
                    })}
                </div>
                <h2 className={best_title}>精選主題</h2>
                <ul className={best_topic}>
                    {allThemeArray.map((themeItem, index) => (
                        <li key={index}
                            className={selectThemeValue.title === themeItem.title ? select_theme : null} onClick={() => selectThemeHandler(themeItem)}
                        >
                            <div>
                                <img src={themeItem.image} alt={themeItem.title} />
                            </div>
                            <span>
                                {themeItem.chineseName}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar