import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">    
        <ul className="nav-links">
            <li>
                Sabweb Project
            </li>
            <li/>
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/about">About</Link>
            </li>       
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            <li>
                <Link href="/login">Login</Link>
            </li> 
            <li>
                <Link href="/register">Register</Link>
            </li> 
            
        </ul>
    </nav>
  );
}

