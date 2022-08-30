import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux';
import { changeTitle } from '../../store/searchSlice'
import { useNavigate } from 'react-router-dom';
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
    // const initialSelectThemeValue = {
    //     title: "",
    //     chineseName: "全部",
    //     image: null,
    //     visitType: "ScenicSpot",
    //     queryObject: {
    //         $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
    //         $filter: `Picture/PictureUrl1 ne null and Address ne null`,
    //     }
    // };
    // const initialSelectCityValue = {
    //     chineseName: "目的地"
    //     , urlPathName: "all"
    // };
    const [distnationValue, distnationFunction] = useToggle(false);
    // const [selectThemeValue, setSelectThemeValue] = useState(initialSelectThemeValue);
    // const [selectCityValue, setSelectCityValue] = useState(initialSelectCityValue);
    // const [searchInput, setSearchInput] = useState("");
    // const selectThemeHandler = (themeItem) => {
    //     setSelectThemeValue((preState) => (preState === themeItem ? initialSelectThemeValue : themeItem));
    // }
    // const selectCityHandler = (e) => {
    //     setSelectCityValue(
    //         {
    //             chineseName: e.target.textContent
    //             , urlPathName: e.target.value
    //         }
    //     )
    //     distnationFunction(false);
    // }
    const searchHandler = (e) => {
        e.preventDefault();
        let queryString = new URLSearchParams(queryStringState.queryObject).toString();
        if (queryStringState.urlPathName !== "all") {
            dispatch(changeTitle(queryStringState.chineseName));
        } else {
            dispatch(changeTitle("搜尋結果"));
        }
        let url = `${queryStringState.visitType}/${queryStringState.urlPathName}/1/?${queryString}`;
        navigate(`/search/${url}`);
    }
    const queryStringInitState = {
        chineseName: "目的地",
        urlPathName: "all",
        title: "",
        image: null,
        visitType: "ScenicSpot",
        queryObject: {
            $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
            $filter: `Picture/PictureUrl1 ne null and Address ne null`,
        },
    };

    const SELECT_CITY = "selectCity";
    const SELECT_THEME = "selectTheme";
    const SEARCH_INPUT = "searchInput";

    function queryStringReducer(state, action) {
        switch (action.type) {
            case SELECT_CITY:
                return {
                    ...state,
                    chineseName: action.payload.chineseName,
                    urlPathName: action.payload.urlPathName,
                };
            case SELECT_THEME:
                return {
                    ...state,
                    visitType: action.payload.visitType,
                    title: action.payload.title,
                    queryObject: {
                        ...action.payload.queryObject,
                    },
                };
            case SEARCH_INPUT:
                if (action.payload.trim() === '') {
                    return {
                        ...state,
                        queryObject: {
                            ...queryStringInitState.queryObject
                        },
                    };
                } else {
                    return {
                        ...state,
                        queryObject: {
                            $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
                            $filter: `Picture/PictureUrl1 ne null and Address ne null and contains(${state.visitType
                                }Name,'${action.payload.trim()}')`,
                        },
                    };
                }
            default:
                return state;
        }
    }

    const [queryStringState, qDispatch] = useReducer(queryStringReducer, queryStringInitState);


    console.log(queryStringState);

    return (
        <div className={`${sidebar} ${menuValue ? sidebar_show : ""}`}>
            <div className={search_input}>
                <button className={`${destination_button} ${distnationValue ? destination_button_turn : ""}`} onClick={distnationFunction}>
                    {
                        queryStringState.chineseName
                    }
                    <img src={drop_down} alt="drop_down" />
                </button>
                <div className={serch_keyword}>
                    <form onSubmit={(e) => { console.log('還沒寫') }}>
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
                                city.urlPathName === queryStringState.urlPathName ? select_city : null
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
                                queryStringState.title === themeItem.title ? select_theme : null
                            }
                            onClick={
                                () => {
                                    qDispatch(
                                        {
                                            type: SELECT_THEME,
                                            payload: themeItem
                                        }
                                    )
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