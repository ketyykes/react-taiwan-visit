import {
	SCENICSPOT_MORE_QUERY,
	ACTIVITY_MORE_QUERY,
	RESTAURANT_MORE_QUERY,
	HOTEL_MORE_QUERY,
} from "../assets/visitTypeQuery.js";
import useGetPlaceData from "./useGetPlaceData";

function makeRandomNumberArray(range, quantity) {
	if (range < quantity) return [];
	let set = new Set();
	for (let index = 0; index < quantity; index++) {
		let randomNumber = Math.floor(Math.random() * range);
		set.has(randomNumber) ? index-- : set.add(randomNumber);
	}
	return Array.from(set);
}

export default function useRandomPlaceQuery(visitType, quantity) {
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
	if (allData !== null) {
		const randomNumberArray = makeRandomNumberArray(allData.length, quantity);
		const returnData = randomNumberArray.map(
			(randomNumber) => (randomNumber = allData[randomNumber])
		);
		return returnData;
	} else {
		return [];
	}
}
