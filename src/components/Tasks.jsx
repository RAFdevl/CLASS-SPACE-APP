// src/components/Tasks.jsx
export default function Tasks() {
  const tasks = [
    { nama: "PR Matematika", deadline: "2 Sept" },
    { nama: "Proyek Sains", deadline: "5 Sept" }
  ];
  return (
    <div>
      <h1 className="text-2xl">📝 Tugas & Deadline</h1>
      <ul className="mt-2">
        {tasks.map((t, i) => (
          <li key={i} className="border p-2 my-1">
            {t.nama} - <b>{t.deadline}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
