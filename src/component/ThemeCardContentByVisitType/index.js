import styles from "./ThemeCardContent.module.scss";
import dayjs from "dayjs";
import location_green from "../../assets/images/location_green.png";
import clock from "../../assets/images/clock.png";
import calling from "../../assets/images/calling.png";
const { wrap_information, wrap_location } = styles;
const ThemeCardContentByVisitType = {
  ScenicSpot: ({ palceDatum: { ScenicSpotName, Address, OpenTime } }) => {
    return (
      <>
        <p>{ScenicSpotName}</p>
        <div className={wrap_information}>
          <div>
            <div className={wrap_location}>
              <img src={location_green} alt="location" />
              {Address}
            </div>
            <div>
              <img src={clock} alt="clock" />
              {OpenTime}
            </div>
          </div>
        </div>
      </>
    );
  },
  Restaurant: ({ palceDatum: { ActivityName, Address, OpenTime } }) => (
    <>
      <p>{ActivityName}</p>
      <div className={wrap_information}>
        <div>
          <div className={wrap_location}>
            <img src={location_green} alt="location" />
            {Address}
          </div>
          <div>
            <img src={clock} alt="clock" />
            {OpenTime}
          </div>
        </div>
      </div>
    </>
  ),
  Hotel: ({ palceDatum: { HotelName, Address, Phone } }) => (
    <>
      <p>{HotelName}</p>
      <div className={wrap_information}>
        <div>
          <div className={wrap_location}>
            <img src={location_green} alt="location" />
            {Address}
          </div>
          <div>
            <img src={calling} alt="clock" />
            <span>{Phone}</span>
          </div>
        </div>
      </div>
    </>
  ),
  Activity: ({ palceDatum: { ActivityName, Address, StartTime, EndTime } }) => (
    <>
      <p>{ActivityName}</p>
      <div className={wrap_information}>
        <div>
          <div className={wrap_location}>
            <img src={location_green} alt="location" />
            {Address}
          </div>
          <div>
            <img src={clock} alt="clock" />
            <span>{`${dayjs(StartTime).format("YYYY/MM/DD")}~${dayjs(
              EndTime
            ).format("YYYY/MM/DD")}`}</span>
          </div>
        </div>
      </div>
    </>
  ),
};
export default ThemeCardContentByVisitType;
