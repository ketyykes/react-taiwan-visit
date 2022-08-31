import React from 'react'
import styles from "./pagination.module.scss"
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ route, itemAmount, visitType, currentPage, city }) => {
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
    const [searchParams] = useSearchParams();

    const clickPageButtonHandler = (e, pageButton) => {
        let pageNumber;
        switch (pageButton) {
            case 'page':
                pageNumber = e.target.value;
                break;
            case 'prePage':
                pageNumber = currentPage - 1;
                break;
            case 'nextPage':
                pageNumber = currentPage + 1;
                break;
            case 'firstPage':
                pageNumber = 1;
                break;
            case 'lastPage':
                pageNumber = totalPage;
                break;
            default:
                pageNumber = 1;
                break;
        }
        navigate(`/${route}/${visitType}/${city}/${pageNumber}?${searchParams}`)
    }

    return (
        <div className={wrap_pagination}>
            <button className={currentPage === 1
                ? visibility_hidden : visibility_visible}
                onClick={(e) => (clickPageButtonHandler(e, "firstPage"))}
            >
                <FontAwesomeIcon
                    size="xl"
                    icon={faAnglesLeft}
                />
            </button>
            <button className={currentPage === 1
                ? visibility_hidden : visibility_visible}
                onClick={(e) => (clickPageButtonHandler(e, "prePage"))}
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
                            onClick={(e) => clickPageButtonHandler(e, "page")}
                        >
                            {element}
                        </button>)
                )
            }
            <button className={currentPage === totalPage
                ? visibility_hidden : visibility_visible}
                onClick={(e) => clickPageButtonHandler(e, "nextPage")}
            >
                <FontAwesomeIcon
                    size="xl"
                    icon={faAngleRight}
                />
            </button>
            <button className={currentPage === totalPage
                ? visibility_hidden : visibility_visible
            } onClick={(e) => clickPageButtonHandler(e, "lastPage")} >
                <FontAwesomeIcon
                    size="xl"
                    icon={faAnglesRight}
                />
            </button>
        </div >
    )
}

export default Pagination