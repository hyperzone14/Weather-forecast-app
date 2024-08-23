import { useSelector } from "react-redux";
import { RootState } from "../utils/storage";
import { useEffect, useState } from "react";

const WeekForecast = () => {
  const unit = useSelector((state: RootState) => state.weather.tempUnit);
  const unitTemp = unit === "metric" ? "°C" : "°F";
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const [showItems, setShowItems] = useState<boolean[]>([]);

  useEffect(() => {
    //sliding effect
    if (forecast && forecast.list) {
      setShowItems(new Array(forecast.list.length).fill(false));
      forecast.list.forEach((_, index) => {
        setTimeout(() => {
          setShowItems((prevShowItems) => {
            const newShowItems = [...prevShowItems];
            newShowItems[index] = true;
            return newShowItems;
          });
        }, index * 100);
      });
    }
  }, [forecast]);

  if (!forecast) {
    return null;
  }

  // Get the current timestamp in seconds
  const currentTime = new Date().getTime() / 1000;

  // Filter the forecast list to include only future times
  const futureForecasts = forecast.list.filter(
    (item) => item.dt >= currentTime
  );

  // Ensure the futureForecasts array has enough items to display
  const displayForecasts =
    futureForecasts.length >= 16
      ? futureForecasts.slice(0, 16)
      : futureForecasts;

  return (
    <>
      <div className="grid grid-cols-7 gap-2 mt-3 p-4 items-center">
        {displayForecasts.map((item, index) => (
          <div
            key={index}
            className={`box-border h-auto w-full border-0 bg-[#fff] hover:shadow-lg rounded-xl slide-in ${
              showItems[index] ? "show" : ""
            }`}
          >
            <p className="text-center font-medium mt-3 text-lg">
              {index === 0
                ? "Now"
                : new Date(item.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
            </p>
            <div className="flex items-center justify-center mt-5">
              <img
                alt={item.weather[0].description}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
            </div>
            <div className="mb-4 mt-3 flex justify-center">
              <p className=" text-md">
                {Math.round(item.main.temp_max)}
                {unitTemp}
              </p>
              <p className="text-gray-400 text-md ps-5">
                {Math.round(item.main.temp_min)}
                {unitTemp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeekForecast;
