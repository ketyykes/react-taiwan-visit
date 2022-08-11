import {
  history,
  outdoor,
  parent_child,
  religion,
  scenery,
  accommodation,
  food,
  sightseeing,
} from "./images/best_theme";
import dayjs from "dayjs";
let now = dayjs().format("YYYY-MM-DD");
const allThemeArray = [
  {
    title: "history",
    chineseName: "歷史文化",
    image: history,
    visitType: "ScenicSpot",
    queryObject: {
      $select: "Class1,ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
      $filter: `(Class3 eq '古蹟類' or Class2 eq '古蹟類'or Class1 eq '古蹟類' or Class3 eq '文化類' or Class2 eq '文化類'or Class1 eq '文化類' or Class3 eq '藝術類' or Class2 eq '藝術類'or Class1 eq '藝術類') and Picture/PictureUrl1 ne null`,
    },
  },
  {
    title: "outdoor",
    chineseName: "戶外踏青",
    image: outdoor,
    visitType: "ScenicSpot",
    queryObject: {
      $select: "Class1,ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
      $filter: `(Class3 eq '生態類' or Class2 eq '生態類'or Class1 eq '生態類' or Class3 eq '林場類' or Class2 eq '林場類'or Class1 eq '林場類' or Class3 eq '休閒農業類' or Class2 eq '休閒農業類'or Class1 eq '休閒農業類') and Picture/PictureUrl1 ne null
        `,
    },
  },
  {
    title: "religion",
    chineseName: "宗教巡禮",
    image: religion,
    visitType: "ScenicSpot",
    queryObject: {
      $select: "Class1,ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
      $filter: `(Class3 eq '廟宇類' or Class2 eq '廟宇類'or Class1 eq '廟宇類')and Picture/PictureUrl1 ne null`,
    },
  },
  {
    title: "parent_child",
    chineseName: "親子活動",
    image: parent_child,
    visitType: "Activity",
    queryObject: {
      $select: `EndTime,Address,StartTime,Picture,ActivityName,ActivityId,Particpation`,
      $filter: `date(EndTime) ge ${now} and contains(Particpation,'國小') or contains(Particpation,'兒童') or contains(ActivityName,'親子')or contains(ActivityName , '兒童')`,
    },
  },
  {
    title: "scenery",
    chineseName: "風景區",
    image: scenery,
    visitType: "ScenicSpot",
    queryObject: {
      $select: "Class1,ScenicSpotName,Picture,OpenTime,Address,ScenicSpotId",
      $filter: `(Class3 eq '自然風景類' or Class2 eq '自然風景類'or Class1 eq '自然風景類' or Class3 eq '都會公園類' or Class2 eq '都會公園類'or Class1 eq '都會公園類' or Class3 eq '國家風景區類' or Class2 eq '國家風景區類'or Class1 eq '國家風景區類') and Picture/PictureUrl1 ne null
        `,
    },
  },
  {
    title: "food",
    chineseName: "美食品嘗",
    image: food,
    visitType: "Restaurant",
    queryObject: {
      $select: "RestaurantId,RestaurantName,Picture,OpenTime,Address",
      $filter: "Picture/PictureUrl1 ne null",
    },
  },
  {
    title: "accommodation",
    chineseName: "住宿推薦",
    image: accommodation,
    visitType: "Hotel",
    queryObject: {
      $select: "Address,Phone,Picture,HotelName,HotelId",
      $filter: "Picture/PictureUrl1 ne null",
    },
  },
  {
    title: "sightseeing",
    chineseName: "觀光活動",
    image: sightseeing,
    visitType: "Activity",
    queryObject: {
      $select: `EndTime,Address,StartTime,Picture,ActivityName,ActivityId`,
      $filter: `date(EndTime) ge 2022-07-28 and Picture/PictureUrl1 ne null`,
    },
  },
];
export default allThemeArray;
