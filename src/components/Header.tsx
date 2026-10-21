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
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1CNPd57q6S/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-emerald hidden sm:inline-flex"
            aria-label="Follow us on Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <button
            className="md:hidden text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className={`${open ? "block" : "hidden"} md:block absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium text-navy items-center">
            <li><Link href="/" className="hover:text-emerald" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/menu" className="hover:text-emerald" onClick={() => setOpen(false)}>Menu</Link></li>
            <li><Link href="/private-hire" className="hover:text-emerald" onClick={() => setOpen(false)}>Private Hire</Link></li>
            <li><Link href="/event-catering" className="hover:text-emerald" onClick={() => setOpen(false)}>Event Catering</Link></li>
            <li><Link href="/gallery" className="hover:text-emerald" onClick={() => setOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-emerald" onClick={() => setOpen(false)}>Contact</Link></li>
            <li className="sm:hidden">
              <a
                href="https://www.facebook.com/share/1CNPd57q6S/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-emerald"
                onClick={() => setOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
