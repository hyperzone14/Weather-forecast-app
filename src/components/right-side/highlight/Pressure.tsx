import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import "../RightCss.css";

const Pressure = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  if (!forecast) return null;
  return (
    <>
      <div className="box-border h-full w-7/12 border-0 bg-[#fff] hover:shadow-lg rounded-xl">
        <p className="grid-title">Sea level pressure</p>
        <div className="mt-8 mx-5 flex items-baseline">
          <p className="text-4xl">
            {forecast.list[0].main.pressure} {""} hPa
          </p>
        </div>
        <p className="text-lg mx-5 mt-7 mb-3">
          {forecast.list[0].main.pressure < 1013 ? "Lower" : "Higher"} than
          standard
        </p>
      </div>
    </>
  );
};

export default Pressure;
