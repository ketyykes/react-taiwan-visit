import React from 'react'
import styles from './theme_section.module.scss';
import ThemeTitle from '../ThemeTitle/ThemeTitle.jsx';
import Card from '../Card/Card.jsx';
const ThemeSection = ({ visitType, placeData, title, CardContent, moreQuery }) => {
    const { wrap_card } = styles;
    return (
        <>
            <ThemeTitle visitType={visitType} title={title} moreQuery={moreQuery} />
            <div className={wrap_card}>
                {placeData.map(
                    (palce, index) =>
                    (
                        <Card key={index} palceDatum={palce}>
                            <CardContent palceDatum={palce} />
                        </Card>
                    )
                )
                }
            </div>
        </>
    )
}

export default ThemeSection