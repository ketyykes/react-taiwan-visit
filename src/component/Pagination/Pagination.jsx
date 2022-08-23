import React from 'react'
import styles from "./pagination.module.scss"
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ itemAmount, visitType, currentPage }) => {
    const { wrap_pagination, current_page_button, common_page_button, visibility_visible, visibility_hidden } = styles;
    let totalPage = (Math.ceil(itemAmount / 12));



    function makePaginationButtonValue(
        { totalPage,
            currentPage,
            perPageButtonAmount = 5
        }
    ) {
        //算總頁數

        //算出所有的頁數的陣列
        const totalPageNumberArray = Array.from({
            length: totalPage
        }, (_, index) => (
            index + 1
        ))
        //算出頁數陣列開始的位置
        let beginSliceNumber = (Math.ceil(currentPage / perPageButtonAmount) - 1) * perPageButtonAmount;
        //算出頁數陣列結束的位置
        let endSliceNumber = (Math.ceil(currentPage / perPageButtonAmount)) * perPageButtonAmount;
        // 算出當前的頁數陣列的數字
        return totalPageNumberArray.slice(beginSliceNumber, endSliceNumber);
    }
    const paginationButtonValueArray = makePaginationButtonValue({ totalPage, itemAmount, currentPage })
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();


    const clickPageButtonHandler = (e) => {
        let pageNumber = e.target.value;
        navigate(`/search/${visitType}/all/${pageNumber}?${searchParams}`)
    }
    const clickFirstPageButtonHandler = () => {
        navigate(`/search/${visitType}/all/1?${searchParams}`);
    }
    const clickPreviousPageButtonHandler = () => {
        navigate(`/search/${visitType}/all/${currentPage - 1}?${searchParams}`)
    }
    const clickNextPageButtonHandler = () => (
        navigate(`/search/${visitType}/all/${currentPage + 1}?${searchParams}`)
    )
    const clickLastPageButtonHandler = () => (
        navigate(`/search/${visitType}/all/${totalPage}?${searchParams}`)
    )
    return (
        <div className={wrap_pagination}>
            <button className={currentPage === 1
                ? visibility_hidden : visibility_visible}
                onClick={clickFirstPageButtonHandler}>
                <FontAwesomeIcon
                    size="xl"
                    icon={faAnglesLeft}
                />
            </button>
            <button className={currentPage === 1
                ? visibility_hidden : visibility_visible}
                onClick={clickPreviousPageButtonHandler}
            >
                <FontAwesomeIcon
                    size="xl"
                    icon={faAngleLeft}
                />
            </button>

            {
                paginationButtonValueArray.map(
                    (element, index) => (
                        <button
                            className={`${currentPage === element ? current_page_button : common_page_button}`}
                            value={element}
                            key={index}
                            onClick={(e) => clickPageButtonHandler(e)}
                        >
                            {element}
                        </button>)
                )
            }
            <button className={currentPage === totalPage
                ? visibility_hidden : visibility_visible}
                onClick={clickNextPageButtonHandler}
            >
                <FontAwesomeIcon
                    size="xl"
                    icon={faAngleRight}
                />
            </button>
            <button className={currentPage === totalPage
                ? visibility_hidden : visibility_visible
            } onClick={clickLastPageButtonHandler} >
                <FontAwesomeIcon
                    size="xl"
                    icon={faAnglesRight}
                />
            </button>
        </div >
    )
}

export default Pagination