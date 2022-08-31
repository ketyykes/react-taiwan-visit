import { SEARCH_INPUT, SELECT_CITY } from "./queryActionType";
function selectCity(city) {
  return {
    type: SELECT_CITY,
    payload: city,
  };
}
function searchInput(inputValue) {
  return {
    type: SEARCH_INPUT,
    payload: inputValue,
  };
}
export { selectCity, searchInput };
