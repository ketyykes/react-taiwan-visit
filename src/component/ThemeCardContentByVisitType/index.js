import dayjs from "dayjs";
import styles from "./ThemeCardContent.module.scss";
import { location_green, clock, calling } from "../../assets/images";
const { wrap_information, wrap_location, wrap_time_or_phone } = styles;
const ThemeCardContentByVisitType = {
  ScenicSpot: ({ placeDatum: { Address, OpenTime } = {} }) => {
    return (
      <>
        <div className={wrap_information}>
          <div>
            <div className={wrap_location}>
              <img src={location_green} alt="location" />
              {Address}
            </div>
            <div className={wrap_time_or_phone}>
              <img src={clock} alt="clock" />
              <span>{OpenTime}</span>
            </div>
          </div>
        </div>
      </>
    );
  },
  Restaurant: ({ placeDatum: { Address, OpenTime } = {} }) => (
    <>
      <div className={wrap_information}>
        <div>
          <div className={wrap_location}>
            <img src={location_green} alt="location" />
            {Address}
          </div>
          <div className={wrap_time_or_phone}>
            <img src={clock} alt="clock" />
            {(() => {
              const createTempleteDiv = document.createElement("div");
              createTempleteDiv.innerHTML = OpenTime;
              return createTempleteDiv.textContent;
            })()}
          </div>
        </div>
      </div>
    </>
  ),
  Hotel: ({ placeDatum: { Address, Phone } = {} }) => (
    <>
      <div className={wrap_information}>
        <div>
          <div className={wrap_location}>
            <img src={location_green} alt="location" />
            {Address}
          </div>
          <div className={wrap_time_or_phone}>
            <img src={calling} alt="clock" />
            <span>{Phone}</span>
          </div>
        </div>
      </div>
    </>
  ),
  Activity: ({ placeDatum: { Address, StartTime, EndTime } = {} }) => (
    <>
      <div className={wrap_information}>
        <div>
          <div className={wrap_location}>
            <img src={location_green} alt="location" />
            {Address}
          </div>
          <div className={wrap_time_or_phone}>
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
