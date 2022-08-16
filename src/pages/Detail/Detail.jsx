import React from 'react'
import styles from './detail.module.scss'
import useGetPlaceData from '../../hook/useGetPlaceData';
import useToggle from '../../hook/useToggle';
import { Aside, Header, Footer } from '../../component'
import { useParams, useSearchParams } from "react-router-dom";


const Detail = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [menuValue, menuValueFunction] = useToggle(false);
    const params = useParams();
    const { visitType } = params;
    const data = useGetPlaceData(visitType, searchParams)
    const { container, display_none, display_block, article } = styles;
    console.log(data);
    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header menuValue={menuValue} >
                <h2>

                </h2>
            </Header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>

            </article>
            <Footer menuValue={menuValue} />
        </div>
    )
}

export default Detail