import React, { useContext } from "react";
import { DataContext, DataContextType } from "../../App";

const LuminosityDisplay: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { luminosityData } = context;

  if (!luminosityData) {
    return <div>Loading...</div>;
  }

  let luminosityLevel;
  if (luminosityData.value <= 5) {
    luminosityLevel = "Día";
  } else if (luminosityData.value <= 10) {
    luminosityLevel = "Crepusculo";
  } else {
    luminosityLevel = "Noche";
  }

  return (
    <div className="bg-green-100 h-[50vh]">
      <h2 className="text-4xl font-bold">Luminosidad</h2>
      <div className="pt-4">
        <p className="text-xl">
          Nivel de Luminosidad:{" "}
          <span className="font-bold">{luminosityLevel}</span>
        </p>
        <p className="text-xl">
          Valor de Visibilidad:{" "}
          <span className="font-bold">{luminosityData.value}</span>
        </p>
      </div>
    </div>
  );
};

export default LuminosityDisplay;
