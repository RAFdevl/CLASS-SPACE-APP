// src/components/Login.jsx
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert("Login berhasil!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl">🔑 Admin Login</h1>
      <form onSubmit={login} className="mt-2 flex flex-col w-64">
        <input
          type="email"
          placeholder="Email"
          className="border p-1 mb-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-1 mb-2"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <button className="bg-blue-600 p-1">Login</button>
      </form>
    </div>
  );
}
