"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
    name: string;
    email: string;
    role: "admin" | "user";
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            setUser(data.user);
        }

        loadUser();
    }, []);

    async function logout() {
        await fetch("/api/auth/logout", {
            method: "POST",
        });

        setUser(null);
        router.push("/login");
        router.refresh();
    }


    return (
        <nav className="navbar">
            <div className="nav-container">

                <Link href="/" className="logo">
                    Korapat Project
                </Link>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li>
                        <Link href="/" >หน้าเริ่มต้น</Link>
                    </li>

                    <li>
                        <Link href="/about">เกี่ยวกับ</Link>
                    </li>
                    <li>
                        <Link href="/contact">ติดต่อ</Link>
                    </li>

                    {user && (
                        <li>
                            <Link href="/dashboard">แดชบอร์ด</Link>
                        </li>
                    )}

                    {user?.role === "admin" && (
                        <li>
                            <Link href="/admin/users">แอดมิน</Link>
                        </li>
                    )}

                    {!user ? (
                        <>
                            <li>
                                <Link href="/login">เข้าสู่ระบบ</Link>
                            </li>
                            <li>
                                <Link href="/register">สมัครสมาชิก</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/profile">{user.name} ({user.role})</Link>
                            </li>
                            <li>
                                <button onClick={logout} className="btn-logout">
                                    ออกจากระบบ
                                </button>
                            </li>
                        </>
                    )}


                </ul>
            </div>
        </nav>
    );
}
