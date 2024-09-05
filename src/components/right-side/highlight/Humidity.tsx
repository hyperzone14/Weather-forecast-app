import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import "../RightCss.css";
import VerticalProgressBar from "./VerticalProgressBar";

const Humidity = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const currentHumidity = forecast?.list[0].main.humidity //get the humidity from the forecast
    ? forecast?.list[0].main.humidity
    : 0;
  if (!forecast) {
    return null;
  }
  return (
    <>
      <div className="box-border h-full w-7/12 border-0 bg-[#fff] hover:shadow-lg rounded-xl">
        <p className="grid-title">Humidity</p>
        <div className="mt-8 mx-5 flex justify-between">
          <div className="flex items-baseline">
            <p className="text-4xl">
              {forecast.list[0].main.humidity}
              <sup className="text-xl">%</sup>
            </p>
          </div>
          <VerticalProgressBar progress={currentHumidity} />
        </div>
        <p className="text-lg mx-5 mt-1 mb-4">
          {currentHumidity <= 30
            ? "Dry air"
            : currentHumidity <= 60
            ? "Comfortable"
            : "High humidity"}
        </p>
      </div>
    </>
  );
};

export default Humidity;
