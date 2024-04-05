import React from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from './detail.module.scss'

import { useGetPlaceData, useToggle, useRandomPlaceQuery } from '../../hook'
import { Aside, Header, Footer, Card, Loading } from '../../component'
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

const Detail = () => {
    const { container,
        display_none,
        display_block,
        article,
        wrap_content,
        visit_img,
        wrap_information,
        wrap_introduction,
        wrap_card,
        wrap_map,
        wrap_transportation,
        wrap_more_visitplace,
        visit_name,
        previous_icon
    } = styles;
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [menuValue, menuValueFunction] = useToggle(false);
    const { visitType } = useParams();
    const detailData = useGetPlaceData(visitType, searchParams);
    const randomPlace = useRandomPlaceQuery(visitType, 3);

    const { Picture: { PictureUrl1 } = {},
        Position: { PositionLat = 23.5, PositionLon = 121 } = {},
        Description, DescriptionDetail,
        TravelInfo, [`${visitType}Name`]: visitName } = detailData?.[0] || {};
    const CardContent = ThemeCardContentByVisitType[visitType];
    const Information = ThemeCardContentByVisitType[visitType];

    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header menuValue={menuValue} >
                <h2>
                    <FontAwesomeIcon
                        size="sm"
                        icon={faAngleLeft}
                        onClick={() => navigate(-1)}
                        className={previous_icon}
                    />
                    <span className={visit_name}>{visitName}</span>
                </h2>
            </Header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>
                <div className={wrap_content}>
                    {PictureUrl1 && <img className={visit_img} src={PictureUrl1} alt={visitName} />}
                    <div className={wrap_information}>
                        {
                            detailData === null ? <Loading /> : <Information placeDatum={detailData?.[0]} />
                        }
                    </div>
                    <div className={wrap_introduction}>
                        <h3>景點介紹</h3>
                        <p>{DescriptionDetail || Description}</p>
                    </div>
                    <div className={wrap_transportation}>
                        <h3>交通方式</h3>
                        <div className={wrap_map}  >
                            <MapContainer scrollWheelZoom={true}>
                                <ChangeView center={[PositionLat, PositionLon]} zoom={13} />
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[PositionLat, PositionLon]}>
                                </Marker>
                            </MapContainer>
                        </div>
                        <p>
                            {TravelInfo}
                        </p>
                    </div>
                    <div className={wrap_more_visitplace}>
                        <h3>更多景點</h3>
                    </div>
                    <div className={wrap_card}>
                        {
                            randomPlace.map(
                                (place, index) =>
                                (
                                    <Card key={index} visitType={visitType} placeDatum={place}>
                                        <CardContent placeDatum={place} />
                                    </Card>
                                )
                            )
                        }
                    </div>
                </div>
            </article>
            <Footer menuValue={menuValue} />
        </div>
    )
}

export default Detail