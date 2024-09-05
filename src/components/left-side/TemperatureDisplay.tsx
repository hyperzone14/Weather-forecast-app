import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/storage";

// Define a functional component "Degree" that accepts two props: "temp" (temperature as a number) and "unit" (temperature unit as a string)
const Degree = ({
  temp,
  unit,
}: {
  temp: number;
  unit: string;
}): JSX.Element => ( // Return a JSX element that displays the temperature and the unit
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

  const weather = forecast.list[0].weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@4x.png`;
  return (
    <>
      <div>
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
