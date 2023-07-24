import React, { useContext } from "react";
import { DataContext, DataContextType } from "../../App";

// Create a new component for TableRow
const TableRow = ({
  item,
  index,
}: {
  item: { id: string; ts: number; text: string };
  index: number;
}) => (
  <tr key={item.id} className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}>
    <td className="p-2 border">{new Date(item.ts * 1000).toLocaleString()}</td>
    <td className="p-2 border font-bold">{item.text}</td>
  </tr>
);

const RvrDisplay: React.FC = () => {
  const { rvrData } = (useContext(DataContext) as DataContextType | null) || {};

  // Check if rvrData is not available
  if (!rvrData) {
    return <div>Cargando...</div>;
  }

  // Sort rvrData by timestamp in descending order
  const sortedRvrData = [...rvrData].sort((a, b) => b.ts - a.ts);

  return (
    <div className="bg-slate-100 p-2 rounded-lg w-[50vw] h-[36vh] shadow-lg">
      <h2 className="text-4xl font-bold">Rvr</h2>
      <div className="overflow-auto max-h-[300px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-2 border">Fecha</th>
              <th className="p-2 border">Texto</th>
            </tr>
          </thead>
          <tbody>
            {sortedRvrData.map((item, index) => (
              <TableRow item={item} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RvrDisplay;
