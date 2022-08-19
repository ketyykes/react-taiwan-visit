import React from 'react'
import styles from "./pagination.module.scss"
import { useParams, useSearchParams, useMatch, useNavigate, useLocation } from "react-router-dom";

const Pagination = ({ itemAmount, visitType }) => {
    const { wrap_pagination } = styles;
    let totalPage = (Math.ceil(itemAmount / 10));
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(location.pathname);
    console.log(useParams());
    const clickHandler = (e) => {
        let pageNumber = e.target.value;
        navigate(`/search/${visitType}/${pageNumber}?${searchParams}`)
    }


    return (
        <div className={wrap_pagination}>
            {/* <button>上一頁</button> */}
            {
                Array.from({ length: totalPage }
                    , (_, index) => (
                        <button key={index} value={index + 1} onClick={(e) => clickHandler(e)}>
                            {index + 1}
                        </button>
                    )
                )
            }
            {/* <button>下一頁</button> */}
        </div>
    )
}

export default Pagination