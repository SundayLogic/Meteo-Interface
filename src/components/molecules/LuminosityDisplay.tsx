import React, { useContext } from "react";
import { DataContext } from "../../App";
import dayIcon from "../../assets/day.png";
import twilightIcon from "../../assets/twilight.png";
import nightIcon from "../../assets/night.png";

// Define la estructura para el objecto de nivel de luminosidad
type LuminosityLevelType = {
  [key: string]: { min?: number; max?: number; icon: string };
};

// Crea un diccionario que mapea el nivel de luminosidad con icono y rango correspondiente
const luminosityLevels: LuminosityLevelType = {
  Día: { max: 5, icon: dayIcon },
  Crepusculo: { min: 6, max: 10, icon: twilightIcon },
  Noche: { min: 11, icon: nightIcon },
};


const LuminosityDisplay: React.FC = () => {
  // Extrae los datos de luminosidad de DataContext
  const { luminosityData } = useContext(DataContext) || {};

  // Si los datos de luminosidad no se han cargado, enseña un mensaje de carga
  if (!luminosityData) {
    return <div>Cargando...</div>;
  }

  // Destrucura los valores de los datos de luminosidad
  const { value } = luminosityData;

  // Encuentra el nivel correcto de nivel de luminosidad y nivel de datos basado en el valor de luminosdidad
  const [luminosityLevel, levelData] = Object.entries(luminosityLevels).find(
    ([_, { min = -Infinity, max = Infinity }]) => value >= min && value <= max
  ) || [null, {}];

  // Si el nivel de luminosidad no se ha podido encontrar, enseña un mensaje de error
  if (!luminosityLevel) {
    return <div>Invalid luminosity value: {value}</div>;
  }

  // Destructura el icono de level data
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
