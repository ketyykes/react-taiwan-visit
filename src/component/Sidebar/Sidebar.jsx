import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux';
import { changeTitle } from '../../store/searchSlice'
import { useNavigate } from 'react-router-dom';
import queryReducer from './queryReducer';
import { SELECT_CITY, SEARCH_INPUT } from "./queryActionType";
import queryInitState from './queryInitState';
import styles from './sidebar.module.scss';
import { magnifying, drop_down } from '../../assets/images'
import allCityArray from '../../assets/allCityArray';
import allThemeArray from '../../assets/allThemeArray';
import useToggle from '../../hook/useToggle.js';

const Sidebar = ({ menuValue }) => {
    const {
        wrap_destination_city,
        serch_keyword,
        sidebar,
        search_input,
        destination_button,
        destination_button_turn,
        sidebar_show,
        best_title,
        best_topic,
        select_theme,
        destination_show,
        select_city,
        start_search,
        display_none,
        display_block
    } = styles;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [distnationValue, distnationFunction] = useToggle(false);
    const selectThemeHandler = (themeItem) => {
        let queryString = new URLSearchParams(themeItem.queryObject).toString();
        let urlPathName = "all"
        let url = `${themeItem.visitType}/${urlPathName}/1/?${queryString}`;
        navigate(`/search/${url}`);
    }
    const searchHandler = (e) => {
        e.preventDefault();
        let queryString = new URLSearchParams(queryState.queryObject).toString();
        queryState.urlPathName !== "all" ? dispatch(changeTitle(queryState.chineseName)) : dispatch(changeTitle("搜尋結果"));
        let url = `${queryState.visitType}/${queryState.urlPathName}/1/?${queryString}`;
        navigate(`/search/${url}`);
    }
    const [queryState, qDispatch] = useReducer(queryReducer, queryInitState);
    return (
        <div className={`${sidebar} ${menuValue ? sidebar_show : ""}`}>
            <div className={search_input}>
                <button className={`${destination_button} ${distnationValue ? destination_button_turn : ""}`} onClick={distnationFunction}>
                    {
                        queryState.chineseName
                    }
                    <img src={drop_down} alt="drop_down" />
                </button>
                <div className={serch_keyword}>
                    <form onSubmit={(e) => {
                        searchHandler(e)
                    }}>
                        <input type="text"
                            placeholder='搜尋關鍵字'
                            onChange={
                                (e) => {
                                    qDispatch({
                                        type: SEARCH_INPUT,
                                        payload: e.target.value
                                    })
                                }
                            }
                        />
                        <img src={magnifying} alt="search" onClick={searchHandler} />
                    </form>
                </div>
                <div className={`${wrap_destination_city} ${distnationValue ? destination_show : ""}`}>
                    {allCityArray.map((city, index) => {
                        return (<button key={index} value={city.urlPathName}
                            className={
                                city.urlPathName === queryState.urlPathName ? select_city : null
                            }
                            onClick={
                                (e) => {
                                    qDispatch({
                                        type: SELECT_CITY,
                                        payload: city
                                    })
                                    distnationFunction(false)
                                }
                            } >
                            {city.chineseName}</button>)
                    })}
                </div>
                <h2 className={best_title}>精選主題</h2>
                <ul className={best_topic}>
                    {allThemeArray.map((themeItem, index) => (
                        <li key={index}
                            className={
                                queryState.title === themeItem.title ? select_theme : null
                            }
                            onClick={
                                (e) => {
                                    // console.log(themeItem);
                                    // qDispatch(
                                    //     {
                                    //         type: SELECT_THEME,
                                    //         payload: themeItem
                                    //     }
                                    // )
                                    // searchHandler(e);
                                    selectThemeHandler(themeItem)
                                }
                            }
                        >
                            <div>
                                <img src={themeItem.image} alt={themeItem.title} />
                            </div>
                            <span>
                                {themeItem.chineseName}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className={`${start_search} ${menuValue ? display_block : display_none}`}>開始搜尋</button>
        </div >
    )
}
export default Sidebar