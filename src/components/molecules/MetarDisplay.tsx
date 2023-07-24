import React, { useContext } from "react";
import { DataContext } from "../../App";

// Create a new component for TableRow
const TableRow = ({ data, index }: { data: { id: string; ts: number; text: string }, index: number }) => (
  <tr key={data.id} className={index % 2 === 0 ? "bg-orange-100" : "bg-white"}>
    <td className="p-2 border">
      {new Date(data.ts * 1000).toLocaleString()}
    </td>
    <td className="p-2 border font-bold">{data.text}</td>
  </tr>
);

const MetarDisplay: React.FC = () => {
  const { metarData } = useContext(DataContext) || {};

  // Check if metarData is not available
  if (!metarData) {
    return <div>Cargando...</div>;
  }

  // Sort metarData by timestamp in descending order
  const sortedMetarData = [...metarData].sort((a, b) => b.ts - a.ts);

  const mostRecentData = sortedMetarData[0];

  return (
    <div className="bg-slate-100 p-2 rounded-lg shadow-lg">
      <h2 className="text-5xl font-bold">Metar</h2>
      <div className="my-2">
        <h4 className="text-2xl font-bold">Valor más reciente</h4>
        <p className="text-xl">
          Fecha: {new Date(mostRecentData.ts * 1000).toLocaleString()}
        </p>
        <p>
          Texto: <span className="font-bold">{mostRecentData.text}</span>
        </p>
      </div>
      <div className="overflow-auto max-h-[300px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-2 border">Fecha</th>
              <th className="p-2 border">Texto</th>
            </tr>
          </thead>
          <tbody>
            {sortedMetarData.map((data, index) => (
              <TableRow data={data} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetarDisplay;
