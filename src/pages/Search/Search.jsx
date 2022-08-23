import React from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import styles from './search.module.scss';
import useToggle from '../../hook/useToggle';
import { Footer, Card, Aside, Header, Pagination } from '../../component'
import useGetPlaceData from '../../hook/useGetPlaceData';
import { useSelector } from "react-redux";
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';


const Search = () => {
    const {
        display_none, display_block,
        container, article, wrap_card, title_type } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();
    console.log(params);
    const { visitType, city, page } = params;
    const data = useGetPlaceData(visitType, searchParams.toString(), city);
    console.log(data);

    const renderData = data.slice((page - 1) * 12, page * 12);

    const CardContent = ThemeCardContentByVisitType[visitType];
    const { title } = useSelector(state => state.selectResult);
    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header >
                <h2 className={title_type}>
                    {title}
                </h2>
            </Header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>
                <div className={wrap_card}>
                    {
                        renderData.map(
                            (place, index) =>
                            (
                                <Card key={index} visitType={visitType} placeDatum={place}>
                                    <CardContent placeDatum={place} />
                                </Card>
                            )
                        )
                    }
                </div>
                <Pagination currentPage={+page} itemAmount={data.length} visitType={visitType} />
            </article>
            <Footer menuValue={menuValue} />
        </div >
    )
}
export default Search