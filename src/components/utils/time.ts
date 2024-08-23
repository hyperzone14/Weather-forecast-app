import { useState, useEffect } from "react";
import { forecastType } from "./optionSelect";

type DateTimeState = {
  day: string;
  time: string;
};

type TimeType = "timezone" | "sunrise" | "sunset";

const useDateTime = (forecast: forecastType | null, timeType: TimeType) => {
  const [dateTime, setDateTime] = useState<DateTimeState>({
    day: "",
    time: "",
  });

  useEffect(() => {
    if (!forecast) return;
    const updateDateTime = () => {
      let localTime: Date;
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;

      // Convert timestamp to local time using the forecast's timezone offset
      switch (timeType) {
        case "sunrise":
          localTime = new Date((forecast.sunrise) * 1000);
          break;
        case "sunset":
          localTime = new Date((forecast.sunset) * 1000);
          break;
        case "timezone":
        default:
          // Get current UTC time and apply the timezone offset
          localTime = new Date(utcTime + forecast.timezone * 1000);
          //console.log(utcTime, " + ", forecast.timezone, " = ", localTime);
          break;
      }

      // Format day and time
      const option: Intl.DateTimeFormatOptions = { weekday: "long" };
      const day = new Intl.DateTimeFormat("en-US", option).format(localTime);
      const time = localTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setDateTime({ day, time });
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, [forecast, timeType]);

  return dateTime;
};

export default useDateTime;
