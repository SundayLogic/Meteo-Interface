import React, { useContext } from 'react';
import { DataContext, DataContextType } from '../../App';

const MetarDisplay: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { metarData } = context;

  if (!metarData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Metar Display</h2>
      {metarData.map((data: {id: string, ts: number, text: string}) => (
        <div key={data.id}>
          <p>Date: {new Date(data.ts * 1000).toLocaleString()}</p>
          <p>Text: {data.text}</p>
        </div>
      ))}
    </div>
  );
}

export default MetarDisplay;
