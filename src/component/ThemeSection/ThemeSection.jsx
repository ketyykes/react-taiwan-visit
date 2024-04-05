import React from 'react'
import styles from './themeSection.module.scss';
import { ThemeTitle, Card } from '../'
const ThemeSection = ({ visitType, placeData, title, CardContent, moreQuery }) => {
    const { wrap_card } = styles;
    return (
        <>
            <ThemeTitle visitType={visitType} title={title} moreQuery={moreQuery} />
            <div className={wrap_card}>
                {placeData?.map(
                    (place, index) =>
                    (
                        <Card visitType={visitType} key={index} placeDatum={place}>
                            <CardContent placeDatum={place} />
                        </Card>
                    )
                )
                }
            </div>
        </>
    )
}

export default ThemeSection