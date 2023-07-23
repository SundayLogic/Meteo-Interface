import React, { useContext } from 'react';
import { DataContext, DataContextType } from '../../App';

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
    luminosityLevel = "Day";
  } else if (luminosityData.value <= 10) {
    luminosityLevel = "Crepusculo";
  } else {
    luminosityLevel = "Night";
  }

  return (
    <div className='bg-green-100 h-[50vh]'>
      <h2 className='text-3xl font-bold'>Luminosidad</h2>
      <p>Luminosity Level: {luminosityLevel}</p>
      <p>Visibility Value: {luminosityData.value}</p>
    </div>
  );
}

export default LuminosityDisplay;
