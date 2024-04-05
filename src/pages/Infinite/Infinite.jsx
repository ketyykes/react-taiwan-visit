import React, { useRef, useState, useEffect } from 'react'
import { Card } from '../../component'
import { useRandomPlaceQuery } from '../../hook'
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';
import styles from './infinite.module.scss';

const Infinite = () => {
    const data = useRandomPlaceQuery("ScenicSpot", 38);
    const { wrap_card } = styles;
    const [page, setPage] = useState(1);
    console.log(data);
    console.log(page);
    let totalPage = (Math.ceil(data.length / 12));
    const renderData = data.slice(0 * 12, page * 12);
    const CardContent = ThemeCardContentByVisitType["ScenicSpot"];
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
            </div>
        </>
    )
}




export default Infinite