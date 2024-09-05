import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import "../RightCss.css";
import * as faIcons from "react-icons/fa";

const getWindDirection = (degree: number) => {
  //set up the wind direction pointer
  switch (true) {
    case degree == 0:
    case degree == 360:
      return "N";
    case degree == 90:
      return "E";
    case degree == 180:
      return "S";
    case degree == 270:
      return "W";
    case degree > 0 && degree < 90:
      return "NE";
    case degree > 90 && degree < 180:
      return "SE";
    case degree > 180 && degree < 270:
      return "SW";
    case degree > 270 && degree < 360:
      return "NW";
    default:
      return "";
  }
};

const WindStatus = () => {
  const unit = useSelector((state: RootState) => state.weather.tempUnit);
  const unitSpeed = unit === "metric" ? "m/s" : "ml/h";
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const [rotation, setRotation] = useState(0); // set the wind direction to be null at first
  const [windDirection, setWindDirection] = useState(""); // set the rotation to be 0 at first

  useEffect(() => {
    if (forecast && forecast.list[0].wind) {
      const { deg } = forecast.list[0].wind;
      setRotation(deg - 45);
      setWindDirection(getWindDirection(deg));
    }
  }, [forecast]); //re-run the effect when the forecast changes

  if (!forecast || !forecast.list[0].wind) {
    return null;
  }
  return (
    <>
      <div className="box-border h-full w-7/12 border-0 bg-[#fff] hover:shadow-lg rounded-xl">
        <p className="grid-title">Wind Status</p>
        <div className="mt-8 ms-5 flex items-baseline">
          <p className="text-4xl">{forecast.list[0].wind.speed}</p>
          <span className="text-xl ml-1">{unitSpeed}</span>
        </div>
        <div className="mt-7 ms-5 flex items-center">
          <div className="icon-container border-2">
            <faIcons.FaLocationArrow
              className="text-sm"
              style={{ transform: `rotate(${rotation}deg)`, color: "#59A5D8" }} //setup the pointer
            />
          </div>
          <span className="ms-2 text-xl">{windDirection}</span>
        </div>
      </div>
    </>
  );
};

export default WindStatus;
