import React from 'react'
import styles from './detail.module.scss'
import useGetPlaceData from '../../hook/useGetPlaceData';
import useToggle from '../../hook/useToggle';
import { Aside, Header, Footer } from '../../component'
import { useParams, useSearchParams } from "react-router-dom";
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';


const Detail = () => {
    const { container
        , display_none
        , display_block
        , article, wrap_content
        , visit_img, wrap_information,
        wrap_introduction, wrap_map, wrap_transportation, wrap_more_visitplace
    } = styles;
    const [searchParams, setSearchParams] = useSearchParams();
    const [menuValue, menuValueFunction] = useToggle(false);
    const { visitType } = useParams();
    const data = useGetPlaceData(visitType, searchParams);
    console.log(data?.[0]);

    const { Picture: { PictureUrl1 } = {},
        Position: { PositionLat = 0, PositionLon = 0 } = {},
        Description, DescriptionDetail,
        TravelInfo, [`${visitType}Name`]: visitName } = data?.[0] || {};

    const CardContent = ThemeCardContentByVisitType[visitType];

    const component = <CardContent palceDatum={data?.[0]} />
    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header menuValue={menuValue} >
                <h2>
                    {visitName}
                </h2>
            </Header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>
                <div className={wrap_content}>
                    <img className={visit_img} src={PictureUrl1} alt="" />
                    <div className={wrap_information}>
                        {component}
                    </div>
                    <div className={wrap_introduction}>
                        <h3>景點介紹</h3>
                        <p>{DescriptionDetail || Description}</p>
                    </div>
                    <div className={wrap_transportation}>
                        <h3>交通方式</h3>
                        <div className={wrap_map} id="mymap">
                        </div>
                        <p>
                            {TravelInfo}
                        </p>
                    </div>
                    <div className={wrap_more_visitplace}>
                        <h3>更多景點</h3>
                    </div>
                </div>
            </article>
            <Footer menuValue={menuValue} />
        </div>
    )
}

export default Detail