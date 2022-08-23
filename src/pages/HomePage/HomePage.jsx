import React from 'react'
import styles from './homepage.module.scss';
import useToggle from '../../hook/useToggle';
import useGetPlaceData from '../../hook/useGetPlaceData';
import { Aside, Header, Banner, ThemeSection, Footer } from '../../component'
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';

import {
    SCENICSPOT_QUERY
    , ACTIVITY_QUERY
    , RESTAURANT_QUERY
    , HOTEL_QUERY
    , SCENICSPOT_MORE_QUERY
    , ACTIVITY_MORE_QUERY
    , RESTAURANT_MORE_QUERY
    , HOTEL_MORE_QUERY
} from '../../assets/visitTypeQuery.js';
const HomePage = () => {
    const {
        display_none, display_block,
        container, article } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);

    const placeDataScenicSpot = useGetPlaceData("ScenicSpot", SCENICSPOT_QUERY);
    const placeDataActivity = useGetPlaceData("Activity", ACTIVITY_QUERY);
    const placeDataRestaurant = useGetPlaceData("Restaurant", RESTAURANT_QUERY);
    const placeDataHotel = useGetPlaceData("Hotel", HOTEL_QUERY);

    const { ScenicSpot, Activity, Restaurant, Hotel } = ThemeCardContentByVisitType;
    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header menuValue={menuValue} >
                <Banner />
            </Header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>
                <ThemeSection
                    title="熱門景點"
                    visitType="ScenicSpot"
                    placeData={placeDataScenicSpot}
                    CardContent={ScenicSpot}
                    moreQuery={SCENICSPOT_MORE_QUERY}
                />
                <ThemeSection
                    title="觀光活動"
                    visitType="Activity"
                    placeData={placeDataActivity}
                    CardContent={Activity}
                    moreQuery={ACTIVITY_MORE_QUERY}
                />
                <ThemeSection
                    title="美食品嘗"
                    visitType="Restaurant"
                    placeData={placeDataRestaurant}
                    CardContent={Restaurant}
                    moreQuery={RESTAURANT_MORE_QUERY}
                />
                <ThemeSection
                    title="住宿推薦"
                    visitType="Hotel"
                    placeData={placeDataHotel}
                    CardContent={Hotel}
                    moreQuery={HOTEL_MORE_QUERY}
                />
            </article>
            <Footer menuValue={menuValue} />
        </div >
    )
}

export default HomePage