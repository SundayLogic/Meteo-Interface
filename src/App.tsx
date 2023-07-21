import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import LuminosityDisplay from './components/molecules/LuminosityDisplay';
import RvrDisplay from './components/molecules/RvrDisplay';
import MetarDisplay from './components/molecules/RvrDisplay';

export const DataContext = createContext();

function App() {
  const [luminosityData, setLuminosityData] = useState(null);
  const [metarData, setMetarData] = useState(null);
  const [rvrData, setRvrData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/v1/v_meteo?__limit=1&__order=-ts')
      .then((response) => {
        setLuminosityData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('http://127.0.0.1:8000/v1/logmetar')
      .then((response) => {
        setMetarData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('http://127.0.0.1:8000/v1/logrvrmor')
      .then((response) => {
        setRvrData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ luminosityData, metarData, rvrData }}>
      <div className="App">
        <LuminosityDisplay />
        <MetarDisplay />
        <RvrDisplay />
      </div>
    </DataContext.Provider>
  );
}

export default App;
