import FeelLike from "./highlight/FeelLike";
import WindStatus from "./highlight/WindStatus";
import RiseSet from "./highlight/RiseSet";
import Humidity from "./highlight/Humidity";
import Visibility from "./highlight/Visibility";
import Pressure from "./highlight/Pressure";

const DayFeatures = () => {
  return (
    <>
      <div className="mt-4">
        <p className="Title text-xl font-medium ms-4">Today's Highlight</p>
        <div className="grid grid-cols-3 gap-3 mt-2 p-4 items-stretch justify-items-center">
          <FeelLike />
          <WindStatus />
          <RiseSet />
          <Humidity />
          <Visibility />
          <Pressure />
        </div>
      </div>
    </>
  );
};

export default DayFeatures;
