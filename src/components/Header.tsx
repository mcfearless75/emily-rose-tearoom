"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-emerald-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-burgundy">
          Emily Rose Tearoom
        </Link>
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className={`${open ? "block" : "hidden"} md:block absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium text-navy">
            <li><Link href="/" className="hover:text-emerald" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/menu" className="hover:text-emerald" onClick={() => setOpen(false)}>Menu</Link></li>
            <li><Link href="/private-hire" className="hover:text-emerald" onClick={() => setOpen(false)}>Private Hire</Link></li>
            <li><Link href="/event-catering" className="hover:text-emerald" onClick={() => setOpen(false)}>Event Catering</Link></li>
            <li><Link href="/gallery" className="hover:text-emerald" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-emerald" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
