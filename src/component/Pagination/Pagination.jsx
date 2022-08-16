// import React, { useState, useEffect } from 'react'
// import { useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import styles from "./pagination.module.scss"
// const Pagination = () => {
//     const { amountPage } = useSelector(state => state.selectResult);
//     const { wrap_pagination } = styles;
//     const [array, setArray] = useState([1]);
//     useEffect(() => {
//         setArray([1, 2, 3, amountPage]);
//     }, [amountPage])
//     // const navigate = useNavigate();
//     const hander = (e) => {
//         console.log(e.target);
//     }

//     // console.log(amountPage);

//     return (
//         <div className={wrap_pagination}>
//             {array.map((element, index) => {
//                 return (<button key={index} onClick={(e) => (hander(e))}>{element}</button>)
//             })}
//         </div>
//     )
// }

// export default Pagination