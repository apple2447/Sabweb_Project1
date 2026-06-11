"use client";
export default function About() {
  return (
    <div className="auth-page">
      <form className="auth-card">
        <h2>สมัครสมาชิก</h2>
        <input placeholder="Name" type="Text"/>
        <input placeholder="Email" type="email"/>  
        <input placeholder="Password" type="password"/>      
        <button>Register</button>
      </form>
    </div>
  );
}
