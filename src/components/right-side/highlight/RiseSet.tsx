import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import "../RightCss.css";
import * as faIcons from "react-icons/fa";
import useDateTime from "../../utils/time";

const RiseSet = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const sunriseTime = useDateTime(forecast, "sunrise");
  const sunsetTime = useDateTime(forecast, "sunset");
  if (!forecast) {
    return null;
  }
  return (
    <>
      <div className="box-border h-full w-7/12 border-0 bg-[#fff] hover:shadow-lg rounded-xl">
        <p className="grid-title">Sunrise and Sunset</p>
        <div className="mt-7 ms-5">
          <div className="sunrise flex items-baseline">
            <div className="bg-[#ffff00] border-orange-200 border-2 rounded-full icon-container border-dashed">
              <faIcons.FaArrowUp className="text-sm" />
            </div>
            <p className="text-lg ps-3">{sunriseTime.time}</p>
          </div>
          <div className="sunset mt-4 flex items-baseline">
            <div className="bg-[#5995b7] border-indigo-700 border-2 rounded-full icon-container border-dashed">
              <faIcons.FaArrowDown color="#fff" className="text-sm" />
            </div>

            <p className="text-lg ps-3">{sunsetTime.time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiseSet;
