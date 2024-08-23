import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/storage";

const Degree = ({
  temp,
  unit,
}: {
  temp: number;
  unit: string;
}): JSX.Element => (
  <p className="text-6xl">
    {temp}
    <sup>o</sup>
    {unit === "metric" ? "C" : "F"}
  </p>
);

const TemperatureDisplay: React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const unit = useSelector((state: RootState) => state.weather.tempUnit);
  if (!forecast) {
    return null;
  }

  const weather = forecast.list[0].weather[0]; // Assuming you want the weather for the first forecast in the list
  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@4x.png`;
  return (
    <>
      <div>
        {/* <img src="/images/bg2.png" alt="Background" /> */}
        <img
          src={forecast.name === "" ? "/images/bg2.png" : iconUrl}
          alt={weather.description}
          className="size-11/12"
        />
      </div>
      <div className="mt-8">
        <Degree temp={Math.round(forecast.list[0].main.temp)} unit={unit} />
      </div>
    </>
  );
};

export default TemperatureDisplay;
