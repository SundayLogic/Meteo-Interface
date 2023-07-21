import React, { useContext } from 'react';
import { DataContext, DataContextType } from '../../App';

const RvrDisplay: React.FC = () => {
  const data = useContext(DataContext) as DataContextType | null;

  if (!data || !data.rvrData) {
    return <div>Loading...</div>;
  }

  const { rvrData } = data;

  return (
    <div>
      <h2>Rvr Display</h2>
      {rvrData.map((item) => (
        <div key={item.id}>
          <p>Date: {new Date(item.ts * 1000).toLocaleString()}</p>
          <p>Text: {item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default RvrDisplay;
