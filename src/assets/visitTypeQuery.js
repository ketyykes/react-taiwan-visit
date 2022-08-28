import dayjs from "dayjs";
let now = dayjs().format("YYYY-MM-DD");

export function queryStringCreator({ $select, $filter, $top }) {
  const object = {};
  if ($select) {
    object.$select = $select;
  }
  if ($filter) {
    object.$filter = $filter;
  }
  if ($top) {
    object.$top = $top;
  }
  return new URLSearchParams(object).toString();
}

const SCENICSPOT_MORE_QUERY_PARAMS = {
  $select: "ScenicSpotName,Picture,OpenTime,Address,ScenicSpotID",
  $filter:
    "Picture/PictureUrl1 ne null and Description ne null and Description ne null",
};

const ACTIVITY_MORE_QUERY_PARAMS = {
  $select: "EndTime,Address,StartTime,Picture,ActivityName,ActivityID",
  $filter: `date(EndTime)ge(${now})and Picture/PictureUrl1 ne null and Description ne null`,
};
const RESTAURANT_MORE_QUERY_PARAMS = {
  $select: "Address,OpenTime,Picture,RestaurantName,RestaurantID",
  $filter:
    "Picture/PictureUrl1 ne null and Description ne null and Description ne null",
};
const HOTEL_MORE_QUERY_PARAMS = {
  $select: "Address,Phone,Picture,HotelName,HotelID",
  $filter:
    "Picture/PictureUrl1 ne null and Description ne null and Description ne null",
};

const SCENICSPOT_QUERY_PARAMS = { ...SCENICSPOT_MORE_QUERY_PARAMS, $top: 3 };
const ACTIVITY_QUERY_PARAMS = { ...ACTIVITY_MORE_QUERY_PARAMS, $top: 3 };
const RESTAURANT_QUERY_PARAMS = { ...RESTAURANT_MORE_QUERY_PARAMS, $top: 3 };
const HOTEL_QUERY_PARAMS = { ...HOTEL_MORE_QUERY_PARAMS, $top: 3 };

export const SCENICSPOT_QUERY = queryStringCreator(SCENICSPOT_QUERY_PARAMS);
export const ACTIVITY_QUERY = queryStringCreator(ACTIVITY_QUERY_PARAMS);
export const RESTAURANT_QUERY = queryStringCreator(RESTAURANT_QUERY_PARAMS);
export const HOTEL_QUERY = queryStringCreator(HOTEL_QUERY_PARAMS);
export const SCENICSPOT_MORE_QUERY = queryStringCreator(
  SCENICSPOT_MORE_QUERY_PARAMS
);
export const ACTIVITY_MORE_QUERY = queryStringCreator(
  ACTIVITY_MORE_QUERY_PARAMS
);
export const RESTAURANT_MORE_QUERY = queryStringCreator(
  RESTAURANT_MORE_QUERY_PARAMS
);
export const HOTEL_MORE_QUERY = queryStringCreator(HOTEL_MORE_QUERY_PARAMS);
