import React, { useContext } from 'react';
import { DataContext } from '../../App';

function LuminosityDisplay() {
  const { luminosityData } = useContext(DataContext);

  if (!luminosityData) {
    return <div>Loading...</div>;
  }

  let luminosityLevel;
  if (luminosityData.value <= 5) {
    luminosityLevel = "Day";
  } else if (luminosityData.value <= 10) {
    luminosityLevel = "Crepusculo";
  } else {
    luminosityLevel = "Night";
  }

  return (
    <div>
      <h2>Luminosity Display</h2>
      <p>Luminosity Level: {luminosityLevel}</p>
      <p>Visibility Value: {luminosityData.value}</p>
    </div>
  );
}

export default LuminosityDisplay;
