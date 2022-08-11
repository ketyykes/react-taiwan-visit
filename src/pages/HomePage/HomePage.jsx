import React, { useState } from 'react'
import styles from './homepage.module.scss';
import banner from '../../assets/images/banner.png';
import logo from '../../assets/images/logo.png';
import toggle from '../../assets/images/toggle.png';
import magnifying from '../../assets/images/magnifying.png';
import drop_down from '../../assets/images/drop_down.png';
import calling from '../../assets/images/calling.png';
import location_green from '../../assets/images/location_green.png';
import location_purple from '../../assets/images/location_purple.png';
import clock from '../../assets/images/clock.png';
import useToggle from '../../hook/useToggle';
import allThemeArray from '../../assets/allThemeArray';
import allCityArray from '../../assets/allCityArray';
import useGetScenery from '../../hook/useGetScenery.js';
import dayjs from 'dayjs'

import {
    SCENICSPOT_QUERY
    , ACTIVITY_QUERY
    , RESTAURANT_QUERY
    , HOTEL_QUERY
    , SCENICSPOT_MORE_QUERY
    , ACTIVITY_MORE_QUERY
    , RESTAURANT_MORE_QUERY
    , HOTEL_MORE_QUERY
} from './homeQuery.js'


const Card = ({ visitType, sceneryData }) => {
    const { OpenTime, Phone, Picture, Address, ScenicSpotName, RestaurantName, ActivityName, HotelName, EndTime, StartTime } = sceneryData;
    const { card, wrap_img, wrap_information, wrap_icon, wrap_location } = styles;
    let name = "";
    let contentComponent = "";
    const handleError = (e) => {
        console.log(e);
        e.currentTarget.src = banner;
    }
    switch (visitType) {
        case 'ScenicSpot':
            name = ScenicSpotName;
            contentComponent = (<>
                <img src={clock} alt="clock" />
                <span>{OpenTime}</span>
            </>)
            break;
        case 'Activity':
            name = ActivityName;
            contentComponent = (<>
                <img src={clock} alt="clock" />
                <span>{`${dayjs(StartTime).format('YYYY/MM/DD')}~${dayjs(EndTime).format('YYYY/MM/DD')}`}</span>
            </>
            )
            break;
        case 'Restaurant':
            name = RestaurantName;
            contentComponent = (<>
                <img src={clock} alt="clock" />
                {OpenTime}
            </>
            )
            break;
        case 'Hotel':
            name = HotelName;
            contentComponent = (
                <>
                    <img src={calling} alt="clock" />
                    <span>{Phone}</span>
                </>
            )
            break;
        default:
            console.log(`Sorry, we are out of ${visitType}.`);
    }
    return (
        <div className={card}>
            <div className={wrap_img}>
                <img src={Picture.PictureUrl1} onError={(error) => handleError(error)} alt="" />
            </div>
            <p>
                {name}
            </p>
            <div className={wrap_information}>
                <div className={wrap_icon}>
                    <div className={wrap_location}>
                        <img src={location_green} alt="location" />
                        {Address}
                    </div>
                    <div >
                        {contentComponent}
                    </div>
                </div>
            </div>
        </div>
    )
}



const HomePage = () => {
    const {
        select_city,
        destination_button_turn,
        select_theme,
        sidebar, display_none, display_block,
        best_topic,
        serch_keyword,
        destination_show,
        sidebar_show,
        wrap_toggle, wrap_card,
        card, wrap_banner_image,
        best_title,
        wrap_visit_type_title, wrap_logo,
        search_input,
        wrap_destination_city,
        destination_button,
        wrap_banner, container } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);
    const [distnationValue, distnationFunction] = useToggle(false);
    const initialSelectCityValue = { chineseName: "目的地", urlPathName: "" };
    const [selectCityValue, setSelectCityValue] = useState(initialSelectCityValue);

    const sceneryScenicSpot = useGetScenery("ScenicSpot", SCENICSPOT_QUERY);
    const sceneryActivity = useGetScenery("Activity", ACTIVITY_QUERY);
    const sceneryRestaurant = useGetScenery("Restaurant", RESTAURANT_QUERY);
    const sceneryHotel = useGetScenery("Hotel", HOTEL_QUERY);


    const selectThemeHandler = (themeItem) => {
        setSelectThemeValue((preState) => (preState === themeItem ? initialSelectThemeValue : themeItem));
    }
    const selectCityHandler = (e) => {
        setSelectCityValue({ chineseName: e.target.textContent, urlPathName: e.target.value })
    }
    const initialSelectThemeValue = {
        title: "",
        chineseName: "全部",
        image: null,
        visitType: "ScenicSpot",
        queryObject: {
            $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
            $filter: `Picture/PictureUrl1 ne null`,
        }
    }
    const [selectThemeValue, setSelectThemeValue] = useState(initialSelectThemeValue);





    return (
        <>
            <div className={container}>
                <aside >
                    <div className={wrap_logo}>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <button className={wrap_toggle} onClick={menuValueFunction}>
                            <img src={toggle} alt="" />
                        </button>
                    </div>
                    <div className={`${sidebar} ${menuValue ? sidebar_show : ""}`}>
                        <div className={search_input}>
                            <button className={`${destination_button} ${distnationValue ? destination_button_turn : ""}`} onClick={distnationFunction}>
                                目的地
                                <img src={drop_down} alt="magnifying" />
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
                            <div className={best_topic}>
                                <ul>
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
                    </div>
                </aside>
                <header className={menuValue ? display_none : display_block}>
                    <div className={wrap_banner}>
                        <h1>探索。<br />
                            福爾摩沙
                        </h1>
                        <div className={wrap_banner_image}>
                            <img src={banner} alt="banner" />
                        </div>
                    </div>
                </header>
                <article className={menuValue ? display_none : display_block}>
                    <div className={wrap_visit_type_title}>
                        <h3>
                            <img src={location_purple} alt="location" />
                            熱門景點</h3>
                        <p>更多熱門景點</p>
                    </div>
                    <div className={wrap_card}>
                        {sceneryScenicSpot.map((sceneryData, index) => (<Card key={index} visitType="ScenicSpot" sceneryData={sceneryData} />))}
                    </div>
                    <div className={wrap_visit_type_title}>
                        <h3><img src={location_purple} alt="location" />觀光活動</h3>
                        <p>更多觀光活動</p>
                    </div>
                    <div className={wrap_card}>
                        {sceneryActivity.map((sceneryData, index) => (<Card key={index} visitType="Activity" sceneryData={sceneryData} />))}
                    </div>
                    <div className={wrap_visit_type_title}>
                        <h3><img src={location_purple} alt="location" />美食品嘗</h3>
                        <p>更多美食品嘗</p>
                    </div>
                    <div className={wrap_card}>
                        {sceneryRestaurant.map((sceneryData, index) => (<Card key={index} visitType="Restaurant" sceneryData={sceneryData} />))}
                    </div>
                    <div className={wrap_visit_type_title}>
                        <h3><img src={location_purple} alt="location" />住宿推薦</h3>
                        <p>更多住宿推薦</p>
                    </div>
                    <div className={wrap_card}>
                        {sceneryHotel.map((sceneryData, index) => (<Card key={index} visitType="Hotel" sceneryData={sceneryData} />))}
                    </div>
                </article>
                <footer className={menuValue ? display_none : display_block}>
                    TAIWAN TRAVEL
                </footer>
            </div >
        </>
    )
}

export default HomePage