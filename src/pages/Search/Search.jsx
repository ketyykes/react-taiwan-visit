import React from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './search.module.scss';
import { useToggle, useGetPlaceData } from '../../hook'
import { Footer, Card, Aside, Header, Pagination } from '../../component'
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';
const Search = () => {
    const {
        display_none, display_block,
        container, article, wrap_card, title_type, no_result } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);
    const [searchParams] = useSearchParams();
    const params = useParams();
    const { visitType, city, page } = params;
    const data = useGetPlaceData(visitType, searchParams.toString(), city);
    const renderData = data.slice((page - 1) * 12, page * 12);
    const CardContent = ThemeCardContentByVisitType[visitType];
    let { title } = useSelector(state => state.selectResult);
    return (
        <div className={container}>
            <Aside
                menuValue={menuValue}
                menuValueFunction={menuValueFunction}
            />
            <Header >
                <h2 className={`${title_type} ${menuValue ? display_none : display_block}`}>
                    {title ||= "搜尋結果"}
                </h2>
            </Header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>
                <div className={wrap_card}>
                    {
                        renderData.length !== 0 ? (
                            renderData.map(
                                (place, index) =>
                                (
                                    <Card key={index}
                                        visitType={visitType}
                                        placeDatum={place}>
                                        <CardContent placeDatum={place} />
                                    </Card>
                                )
                            )
                        ) : (<span className={no_result}>找不到你所搜尋的內容</span>)
                    }
                </div>
                {
                    renderData.length !== 0 && (<Pagination
                        route="search"
                        city={city}
                        currentPage={+page}
                        itemAmount={data.length}
                        visitType={visitType}
                    />)
                }

            </article>
            <Footer menuValue={menuValue} />
        </div >
    )
}
export default Search