import React, { useRef, useState, useEffect } from 'react'
import { Card } from '../../component'
import { useParams } from "react-router-dom";
import { useRandomPlaceQuery } from '../../hook'
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';
import styles from './Infinite.module.scss';

const Infinite = () => {
    const data = useRandomPlaceQuery("ScenicSpot", 2000);
    const { wrap_card } = styles;
    const [page, setPage] = useState(1);
    console.log(data);
    const renderData = data.slice(0 * 12, page * 12);
    const CardContent = ThemeCardContentByVisitType["ScenicSpot"];
    const morePicture = () => {
        setPage(prev => prev + 1);
        console.log("test");
    }
    const divRef = useRef();
    useEffect(() => {
        const io = new IntersectionObserver((entries) => {
            console.log(entries);
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                setPage(prev => prev + 1);
            });
        }, {});
        io.observe(divRef.current);
    }, []);
    return (
        <>
            <div className={wrap_card}>
                {
                    renderData.map(
                        (place, index) => {
                            if (renderData.length === index + 1) {
                                return (<Card key={index} visitType={"ScenicSpot"} placeDatum={place}>
                                    <CardContent placeDatum={place} />
                                </Card>)
                            } else {
                                return (<Card key={index} visitType={"ScenicSpot"} placeDatum={place}>
                                    <CardContent placeDatum={place} />
                                </Card>)
                            }
                        }
                    )
                }
                <div ref={divRef}></div>
                <button style={{ fontSize: "50px" }} onClick={morePicture}>Load More</button>
            </div>
        </>
    )
}




export default Infinite