 "use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Proyek", "#work"],
    ["Klien", "#clients"],
    ["Keahlian", "#capabilities"],
    ["Tentang Kami", "#about"],
    ["Kontak", "#contact"]
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">BL</span>
          <span>
            <strong>BERUANGLAUT</strong>
            <small>.ID</small>
          </span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Buka menu">
          <span></span><span></span>
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Mulai Proyek ↗</a>
        </div>
      </nav>
    </header>
  );
}
