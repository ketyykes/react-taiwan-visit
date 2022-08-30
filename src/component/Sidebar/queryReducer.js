import { SELECT_CITY, SEARCH_INPUT } from "./queryActionType";
function queryReducer(state, action) {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        chineseName: action.payload.chineseName,
        urlPathName: action.payload.urlPathName,
      };
    case SEARCH_INPUT:
      return {
        ...state,
        queryObject: {
          $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
          $filter: `Picture/PictureUrl1 ne null and Address ne null and contains(${
            state.visitType
          }Name,'${action.payload.trim()}')`,
        },
      };
    default:
      return state;
  }
}
export default queryReducer;
