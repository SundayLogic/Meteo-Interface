import React, { useContext } from "react";
import { DataContext } from "../../App";
import dayIcon from "../../assets/day.png";
import twilightIcon from "../../assets/twilight.png";
import nightIcon from "../../assets/night.png";

type LuminosityLevelType = {
  [key: string]: { min?: number; max?: number; icon: string };
};

// Define a mapping object to handle the luminosity levels
const luminosityLevels: LuminosityLevelType = {
  Día: { max: 5, icon: dayIcon },
  Crepusculo: { min: 6, max: 10, icon: twilightIcon },
  Noche: { min: 11, icon: nightIcon },
};

const LuminosityDisplay: React.FC = () => {
  const { luminosityData } = useContext(DataContext) || {};

  if (!luminosityData) {
    return <div>Cargando...</div>;
  }

  const { value } = luminosityData;

  // Find the correct luminosity level based on the value
  const [luminosityLevel, levelData] = Object.entries(luminosityLevels).find(
    ([_, { min = -Infinity, max = Infinity }]) => value >= min && value <= max
  ) || [null, {}];

  if (!luminosityLevel) {
    return <div>Invalid luminosity value: {value}</div>;
  }

  const { icon } = levelData;

  return (
    <div className="h-[36vh] bg-slate-100 rounded-lg px-6 w-[25vw] py-2 shadow-md">
      <h2 className="text-4xl font-bold">Luminosidad</h2>
      <div className="pt-4 flex flex-col space-y-1">
        <p className="text-xl">
          Nivel de Luminosidad:{" "}
          <span className="font-bold">{luminosityLevel}</span>
        </p>
        <p className="text-xl">
          Valor de Visibilidad: <span className="font-bold">{value}</span>
        </p>
        <img
          src={icon}
          alt={luminosityLevel}
          className="w-36 pt-5 self-center"
        />
      </div>
    </div>
  );
};

export default LuminosityDisplay;
