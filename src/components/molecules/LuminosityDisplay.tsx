import React, { useContext } from "react";
import { DataContext } from "../../App";
import dayIcon from "../../assets/day.png"; // Replace with your actual file nam
import twilightIcon from "../../assets/twilight.png"; // Replace with your actual file name
import nightIcon from "../../assets/night.png"; // Replace with your actual file name

const LuminosityDisplay: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    return <div>Cargando...</div>;
  }

  const { luminosityData } = context;

  if (!luminosityData) {
    return <div>Cargando...</div>;
  }

  let luminosityLevel;
  let icon;
  if (luminosityData.value <= 5) {
    luminosityLevel = "Día";
    icon = dayIcon;
  } else if (luminosityData.value <= 10) {
    luminosityLevel = "Crepusculo";
    icon = twilightIcon;
  } else {
    luminosityLevel = "Noche";
    icon = nightIcon;
  }

  return (
    <div className="h-[36vh] bg-slate-100 rounded-lg px-6 w-[25vw] py-2 shadow-md">
      <h2 className="text-4xl font-bold">Luminosidad</h2>
      <div className="pt-4 flex flex-col space-y-1">
        <p className="text-xl">
          Nivel de Luminosidad:{" "}
          <span className="font-bold">{luminosityLevel}</span>
        </p>
        <p className="text-xl">
          Valor de Visibilidad:{" "}
          <span className="font-bold">{luminosityData.value}</span>
        </p>
        <img
          src={icon}
          alt={luminosityLevel}
          className="w-36 pt-5 self-center"
        />{" "}
        {/* Replace with desired width and height */}
      </div>
    </div>
  );
};

export default LuminosityDisplay;
