// import * as weaIcon from "weather-icons-react";
import TitleElements from "./TitleElements";
import WeekForecast from "./WeekForecast";
import DayFeatures from "./DayFeatures";

export default function RightBar() {
  return (
    <>
      <nav className=" bg-[#f5f5f5] w-full h-full">
        <div className="my-2 mx-10">
          <TitleElements />
          <WeekForecast />
          <DayFeatures />
        </div>
      </nav>
    </>
  );
}
