import GaugeChart from "./GaugeChart";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/storage";
import "../RightCss.css";

const FeelLike = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  if (!forecast) return null;
  return (
    <>
      <div className="box-border h-full w-7/12 border-0 bg-[#fff] hover:shadow-lg rounded-xl">
        <p className="grid-title">Human temperature</p>
        <GaugeChart />
      </div>
    </>
  );
};

export default FeelLike;
