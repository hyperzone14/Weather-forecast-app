import { useSelector } from "react-redux";
import { RootState } from "../utils/storage";
// import * as weaIcon from "weather-icons-react";
import TemperatureButtons from "./TemperatureButtons";
import { useForecast } from "../utils/useForecast";

const TitleElements = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const { unit, setUnit } = useForecast();
  if (!forecast) return null;
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <p className="text-xl">
          Weather forecast for {""}
          <b>
            <u>{forecast.name}</u>
          </b>
        </p>
        <div className="items-center flex">
          <TemperatureButtons unit={unit} setUnit={setUnit} />
          <img
            src="/images/bg2.png"
            alt="Overlay"
            className="w-12 h-auto object-cover rounded-md mx-2 hover:shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default TitleElements;
