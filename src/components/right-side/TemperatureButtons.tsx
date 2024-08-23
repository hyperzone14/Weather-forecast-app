import React from "react";
import * as weaIcon from "weather-icons-react";

interface TemperatureButtonsProps {
  unit: string;
  setUnit: (unit: string) => void;
}

const TemperatureButtons: React.FC<TemperatureButtonsProps> = ({
  unit,
  setUnit,
}) => {
  return (
    <>
      <button
        className="bg-[#fff] focus:outline-none rounded-full me-2 ${unit === 'metric' ? 'ring-2 ring-black' : ''}"
        onClick={() => setUnit("metric")}
      >
        <weaIcon.WiCelsius size={45} color="#000" />
      </button>
      <button
        className="bg-[#000] focus:outline-none rounded-full ms-2 me-8 ${unit === 'imperial' ? 'ring-2 ring-white' : ''}"
        onClick={() => setUnit("imperial")}
      >
        <weaIcon.WiFahrenheit size={45} color="#fff" />
      </button>
    </>
  );
};

export default TemperatureButtons;
