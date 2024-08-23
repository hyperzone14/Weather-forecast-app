import React from "react";
import SearchElement from "./SearchElement";
import AdBanner from "./AdBanner";
import DateTimeDisplay from "./DateTimeDisplay";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherInfo from "./WeatherInfo";

export default function LeftBar() {
  return (
    <>
      <nav className="w-1/4 bg-white-800 h-full flex flex-col">
        <div className="mx-6 my-4">
          <SearchElement />
          <div className="mt-4 px-5">
            <TemperatureDisplay />
            <DateTimeDisplay />
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <WeatherInfo />
            <AdBanner />
          </div>
        </div>
      </nav>
    </>
  );
}
