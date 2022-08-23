import {
  SCENICSPOT_MORE_QUERY,
  ACTIVITY_MORE_QUERY,
  RESTAURANT_MORE_QUERY,
  HOTEL_MORE_QUERY,
} from "../assets/visitTypeQuery.js";
import useGetPlaceData from "./useGetPlaceData";

function makeRandomNumberArray(range, number) {
  let set = new Set();
  for (let index = 0; index < number; index++) {
    let randomNumber = Math.floor(Math.random() * range);
    set.has(randomNumber) ? index-- : set.add(randomNumber);
  }
  return Array.from(set);
}

export default function useRandomPlaceQuery(visitType) {
  let paramsQuery;
  if (visitType === "ScenicSpot") {
    paramsQuery = SCENICSPOT_MORE_QUERY;
  }
  if (visitType === "Activity") {
    paramsQuery = ACTIVITY_MORE_QUERY;
  }
  if (visitType === "Restaurant") {
    paramsQuery = RESTAURANT_MORE_QUERY;
  }
  if (visitType === "Hotel") {
    paramsQuery = HOTEL_MORE_QUERY;
  }
  const allData = useGetPlaceData(visitType, paramsQuery);
  const randomNumberArray = makeRandomNumberArray(allData.length, 3);
  const returnData = [
    allData[randomNumberArray[0]],
    allData[randomNumberArray[1]],
    allData[randomNumberArray[2]],
  ];
  return returnData;
}
