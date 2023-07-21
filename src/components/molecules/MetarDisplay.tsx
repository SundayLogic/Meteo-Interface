import React, { useContext } from 'react';
import { DataContext } from '../../App';

function MetarDisplay() {
  const { metarData } = useContext(DataContext);

  if (!metarData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Metar Display</h2>
      {metarData.map((data) => (
        <div key={data.id}>
          <p>Date: {new Date(data.ts * 1000).toLocaleString()}</p>
          <p>Text: {data.text}</p>
        </div>
      ))}
    </div>
  );
}

export default MetarDisplay;
