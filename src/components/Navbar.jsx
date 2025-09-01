// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-900 p-3 flex justify-between items-center">
      <div className="flex gap-3">
        <Link to="/">🚀 Dashboard</Link>
        <Link to="/announcements">📢 Pengumuman</Link>
        <Link to="/schedule">📅 Jadwal</Link>
        <Link to="/tasks">📝 Tugas</Link>
        <Link to="/attendance">📡 Absensi</Link>
        <Link to="/calendar">🗓️ Kalender</Link>
        <Link to="/members">👨‍🚀 Crew</Link>
        <Link to="/gallery">🖼️ Galeri</Link>
        <Link to="/resources">📚 Sumber</Link>
        <Link to="/contact">☎️ Kontak</Link>
        <Link to="/chat">💬 Chat</Link>
      </div>
      <div className="flex gap-3 items-center">
        <ThemeToggle />
        {user ? (
          <button onClick={logout} className="bg-red-600 px-2 rounded">
            Keluar
          </button>
        ) : (
          <Link to="/login" className="bg-green-600 px-2 rounded">
            Admin
          </Link>
        )}
      </div>
    </nav>
  );
}
