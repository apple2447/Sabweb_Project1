"use client";
export default function About() {
  return (
    <div className="auth-page">
      <form className="auth-card">
        <h2>ลืมรหัสผ่าน</h2>
        <input placeholder="Email" type="email"/>     
        <button>Find</button>
      </form>
    </div>
  );
}
