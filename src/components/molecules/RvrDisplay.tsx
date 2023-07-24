import React, { useContext } from "react";
import { DataContext, DataContextType } from "../../App";

const RvrDisplay: React.FC = () => {
  // Usa el useContext hook para acceder a los datos del DataContext
  const data = useContext(DataContext) as DataContextType | null;

  // Si los datos del rvrData no está disponible, muestra un mensaje de carga
  if (!data || !data.rvrData) {
    return <div>Cargando...</div>;
  }

  // Ordena el rvrData en base a fecha y hora en orden descendiente
  const sortedRvrData = [...data.rvrData].sort((a, b) => b.ts - a.ts);

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
            {
              // Mapea a través de los datos ordenados y crea una fila en la tabla para cada elemento
              sortedRvrData.map(
                (
                  item: { id: string; ts: number; text: string },
                  index: number
                ) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "bg-blue-100" : "bg-white"} // Usa un color de fondo distinto para cada fila
                  >
                    <td className="p-2 border">
                      {new Date(item.ts * 1000).toLocaleString()}
                    </td>
                    <td className="p-2 border font-bold">{item.text}</td> 
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RvrDisplay;
