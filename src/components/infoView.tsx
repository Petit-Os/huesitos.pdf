import { useEffect, useState } from "react";
import Papa from "papaparse";

// 👇 importa el CSV como texto crudo
import csvData from "../assets/datos.csv?raw";

interface Usuario {
  id: string;
  edad: Float16Array;
  genero: string;
  fracturado: boolean;
  vFAS: Float16Array;
  vAO: Float16Array;
  espesor: Float16Array;
  porosidad: Float16Array;
}

export default function InfoView() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // Parsear el CSV usando papaparse
    Papa.parse<Usuario>(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setUsuarios(result.data);
      },
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Usuarios desde CSV</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Edad</th>
            <th className="border px-4 py-2">Genero</th>
            <th className="border px-4 py-2">Fracturado</th>
            <th className="border px-4 py-2">vFAS</th>
            <th className="border px-4 py-2">vAO</th>
            <th className="border px-4 py-2">Espesor</th>
            <th className="border px-4 py-2">Porosidad</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{u.id}</td>
              <td className="border px-4 py-2">{u.edad}</td>
              <td className="border px-4 py-2">{u.genero}</td>
              <td className="border px-4 py-2">{u.fracturado}</td>
              <td className="border px-4 py-2">{u.vFAS}</td>
              <td className="border px-4 py-2">{u.vAO}</td>
              <td className="border px-4 py-2">{u.espesor}</td>
              <td className="border px-4 py-2">{u.porosidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
