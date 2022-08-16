import React from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import styles from './search.module.scss';
import useToggle from '../../hook/useToggle';
import { Footer, Card, Aside, Header, Pagination } from '../../component'
import useGetPlaceData from '../../hook/useGetPlaceData';
import { useSelector, useDispatch } from "react-redux";
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';
import { changeAmountPage } from '../../store/searchSlice'


const Search = () => {
    const {
        display_none, display_block,
        container, article, wrap_card, title_type } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();
    const { visitType, city, page } = params;
    const distpatch = useDispatch();
    const data = useGetPlaceData(visitType, searchParams.toString(), city, page);

    distpatch(changeAmountPage(data));
    const renderData = data.filter((_, index) => (index < 12));
    console.log(renderData);
    const CardContent = ThemeCardContentByVisitType[visitType];
    const { title, amountPage } = useSelector(state => state.selectResult);
    console.log(amountPage);
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
                                <Card key={index} visitType={visitType} palceDatum={place}>
                                    <CardContent palceDatum={place} />
                                </Card>
                            )
                        )
                    }
                    {/* <Pagination /> */}
                </div>
            </article>
            <Footer menuValue={menuValue} />
        </div >
    )
}
export default Search