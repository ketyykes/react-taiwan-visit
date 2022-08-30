import { useReducer } from "react";
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
        ...queryStringInitState,
        chineseName: action.payload.chineseName,
        urlPathName: action.payload.urlPathName,
      };
    case SELECT_THEME:
      return {
        ...queryStringInitState,
        visitType: action.payload.visitType,
        queryObject: {
          ...action.payload.queryObject,
        },
      };
    case SEARCH_INPUT:
      return {
        ...queryStringInitState,
        queryObject: {
          $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
          $filter: `Picture/PictureUrl1 ne null and Address ne null and contains(${
            queryStringInitState.visitType
          }Name,'${action.payload.trim()}')`,
        },
      };
    default:
      return state;
  }
}
