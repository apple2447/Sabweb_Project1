import Link from "next/link";

export default function About() {
  return (
    <div className="auth-page">
      <form className="auth-card">
        <h2>เข้าสู่ระบบ</h2>
        <input placeholder="Email" type="email"/>  
        <input placeholder="Password" type="password"/>  
        <Link href="/forget-password" className="hover:text-red-300 text-red-400">Forget Password</Link>
        <button>Login</button>
      </form>
    </div>
  );
}

