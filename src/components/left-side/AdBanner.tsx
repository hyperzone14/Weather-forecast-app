import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/storage";

const AdBanner: React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  if (!forecast) {
    return null;
  }
  return (
    <div className="mt-6 relative">
      <img
        src="/images/interstella.png"
        alt="Overlay"
        className="w-60 h-auto object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-md font-medium bg-opacity-50 p-4 rounded">
          {forecast.name}
        </span>
      </div>
    </div>
  );
};

export default AdBanner;
