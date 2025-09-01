// src/components/Schedule.jsx
export default function Schedule() {
  const jadwal = [
    { hari: "Senin", mapel: "Matematika" },
    { hari: "Selasa", mapel: "Bahasa Inggris" },
    { hari: "Rabu", mapel: "Fisika" }
  ];
  return (
    <div>
      <h1 className="text-2xl">📅 Jadwal Pelajaran</h1>
      <table className="table-auto mt-2 border">
        <thead>
          <tr>
            <th className="border px-2">Hari</th>
            <th className="border px-2">Mata Pelajaran</th>
          </tr>
        </thead>
        <tbody>
          {jadwal.map((j, i) => (
            <tr key={i}>
              <td className="border px-2">{j.hari}</td>
              <td className="border px-2">{j.mapel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
