"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Register สำเร็จแล้ว");
      router.push("/login");
    } else {
      alert("Register ผิดพลาด");
    }
  }


  return (

    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2> สมัครสมาชิก </h2>
        <input
          placeholder="Name"
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button>Register</button>
      </form>
    </div>
  );
}