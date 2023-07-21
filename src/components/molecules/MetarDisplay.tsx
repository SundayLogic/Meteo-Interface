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
    <div className='bg-orange-100'>
      <h2 className='text-3xl font-bold'>Metar</h2>
      <div className='overflow-auto max-h-[500px]'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr>
              <th className='p-2 border'>Date</th>
              <th className='p-2 border'>Text</th>
            </tr>
          </thead>
          <tbody>
            {metarData.map((data: {id: string, ts: number, text: string}) => (
              <tr key={data.id}>
                <td className='p-2 border'>{new Date(data.ts * 1000).toLocaleString()}</td>
                <td className='p-2 border'>{data.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MetarDisplay;
