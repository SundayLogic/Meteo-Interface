import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Home from "./components/pages/Home";

// Define los distintos tipados para los diferentes tipos de datos
type LuminosityData = {
  ts: number;
  value: number;
  id_metar: string;
  id_rvr: string | null;
  metar: string;
  rvrmor: string | null;
  id: string;
};

type MetarData = {
  ts: number;
  text: string;
  id: string;
};

type RvrData = {
  ts: number;
  text: string;
  id: string;
};

// Define la estructura del data context
export type DataContextType = {
  luminosityData: LuminosityData | null;
  metarData: MetarData[] | null;
  rvrData: RvrData[] | null;
};

// Crea el data context con valor base de null
export const DataContext = createContext<DataContextType | null>(null);

// Crea un hook customizado para hacer el fetching de los datos
const useFetchData = <T,>(url: string): [T | null] => {
  // Inicializa el state para data
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    // Define una funcion para hacer el fetching de data
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return [data];
};

const App: React.FC = () => {
  // Haz un fetching de los datos necesarios usando el hook customizado
  const [luminosityDataArray] = useFetchData<LuminosityData[]>(
    "http://127.0.0.1:8000/v1/v_meteo?__limit=1&__order=-ts"
  );
  const [metarData] = useFetchData<MetarData[]>(
    "http://127.0.0.1:8000/v1/logmetar"
  );
  const [rvrData] = useFetchData<RvrData[]>(
    "http://127.0.0.1:8000/v1/logrvrmor"
  );

  const luminosityData = luminosityDataArray?.[0] || null;

  return (
    <DataContext.Provider value={{ luminosityData, metarData, rvrData }}>
      <Home />
    </DataContext.Provider>
  );
};

export default App;
