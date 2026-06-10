import Link from "next/link";
export default function Login() {
  return (
    <div>
      <h2>เข้าสู่ระบบ</h2>
      <h5> </h5>
      <Link href="/forget-password" className="hover:text-red-300 text-red-400">Forget Password</Link>
    </div>
  );
}
