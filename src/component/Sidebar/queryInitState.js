const queryInitState = {
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
export default queryInitState;
