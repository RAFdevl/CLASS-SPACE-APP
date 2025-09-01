// src/components/Members.jsx
export default function Members() {
  const crew = ["Andi", "Budi", "Citra", "Dewi"];
  return (
    <div>
      <h1 className="text-2xl">👨‍🚀 Crew Deck</h1>
      <ul className="list-disc pl-5">
        {crew.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <form className="mt-3">
        <input
          type="text"
          placeholder="Nama siswa baru"
          className="border p-1"
        />
        <button className="bg-green-600 px-2 ml-2">Tambah</button>
      </form>
    </div>
  );
}
