import React, { useContext } from 'react';
import { DataContext } from '../../App';

function RvrDisplay() {
  const { rvrData } = useContext(DataContext);

  if (!rvrData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Rvr Display</h2>
      {rvrData.map((data) => (
        <div key={data.id}>
          <p>Date: {new Date(data.ts * 1000).toLocaleString()}</p>
          <p>Text: {data.text}</p>
        </div>
      ))}
    </div>
  );
}

export default RvrDisplay;
