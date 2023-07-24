import LuminosityDisplay from "../molecules/LuminosityDisplay";
import MetarDisplay from "../molecules/MetarDisplay";
import RvrDisplay from "../molecules/RvrDisplay";

const Tablas = () => {
  return (
    <div className="flex flex-col space-y-6">
      <MetarDisplay />
      <div className="flex h-[25vh] justify-between">
        <RvrDisplay />
        <LuminosityDisplay />
      </div>
    </div>
  );
};
export default Tablas;
