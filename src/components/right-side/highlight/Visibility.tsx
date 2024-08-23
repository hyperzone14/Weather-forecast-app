import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import "../RightCss.css";

const Visibility = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const currentVisibility = forecast?.list[0].visibility;
  const visibleInKm = currentVisibility ? currentVisibility / 1000 : 0;
  if (!forecast) {
    return null;
  }
  return (
    <>
      <div className="box-border h-full w-7/12 border-0 bg-[#fff] hover:shadow-lg rounded-xl">
        <p className="grid-title">Visibility</p>
        <div className="mt-8 ms-5 flex items-baseline">
          <p className="text-4xl">{visibleInKm}</p>
          <span className="text-xl ml-1">km</span>
        </div>
        <p className="text-lg mx-5 mt-7 mb-3">
          {visibleInKm <= 1
            ? "Very low"
            : visibleInKm <= 2
            ? "Poor"
            : visibleInKm <= 5
            ? "Moderate"
            : visibleInKm <= 10
            ? "Good"
            : "Clear"}
        </p>
      </div>
    </>
  );
};

export default Visibility;
