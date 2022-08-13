import React from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import styles from './search.module.scss';
import useToggle from '../../hook/useToggle';
import { Logo, Sidebar, Footer, Card } from '../../component'
import useGetPlaceData from '../../hook/useGetPlaceData';
import { useSelector } from "react-redux";
import ThemeCardContentByVisitType from '../../component/ThemeCardContentByVisitType';


const Search = () => {
    const {
        display_none, display_block,
        container, aside, header, article, wrap_card, title_type } = styles;
    const [menuValue, menuValueFunction] = useToggle(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const params = useParams();
    const { visitType, city } = params;
    console.log(visitType);
    console.log(searchParams.toString());
    const data = useGetPlaceData(visitType, searchParams.toString(), city);
    const renderData = data.filter((el, index) => (index < 20));
    const CardContent = ThemeCardContentByVisitType[visitType];
    const { title } = useSelector(state => state.selectResult);
    return (
        <div className={container}>
            <aside className={aside}>
                <Logo menuValueFunction={menuValueFunction} />
                <Sidebar menuValue={menuValue} />
            </aside>
            <header className={`${header} ${menuValue ? display_none : display_block}`}>
                <h2 className={title_type}>
                    {title}
                </h2>
            </header>
            <article className={`${article} ${menuValue ? display_none : display_block}`}>
                <div className={wrap_card}>
                    {renderData.map(
                        (place, index) =>
                        (
                            <Card key={index} palceDatum={place}>
                                <CardContent palceDatum={place} />
                            </Card>
                        )
                    )
                    }
                </div>
            </article>
            <Footer menuValue={menuValue} />
        </div >
    )
}
export default Search