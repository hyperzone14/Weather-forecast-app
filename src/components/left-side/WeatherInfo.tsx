import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/storage";
import * as weaIcon from "weather-icons-react";

const WeatherInfo: React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  if (!forecast) return null;
  return (
    <div className="mt-4">
      <div className="flex">
        <weaIcon.WiBarometer size={24} color="#000" />
        <p className="ms-3 text-md">
          {forecast.list[0].weather[0].description}
        </p>
      </div>
      <div className="flex mt-5">
        {" "}
        {/*đoạn này làm chơi thôi ko bit thêm j vô á*/}
        <weaIcon.WiRainWind size={24} color="#000" />
        <p className="ms-3 text-md">Rain</p>
        <p className="ms-3 text-md">-</p>
        <p className="ms-3 text-md">30%</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
