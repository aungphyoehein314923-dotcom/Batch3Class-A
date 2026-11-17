"use client"
import Link from "next/link";


export default function Header() {
    return (
        <header style={{ background: "#1976d2", color: "white", padding: "lrem" }}>
            <Link href="/" style={{ color: "white", marginRight: "10px" }}>Home</Link>
            <Link href="about" style={{ color: "white", marginRight: "10px" }}>About</Link>
            <Link href="/" style={{ color: "white", marginRight: "10px" }}>Contact</Link>
        </header>
    );
}