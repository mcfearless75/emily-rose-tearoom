import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-stone-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl text-white mb-2">Emily Rose Tearoom</h3>
          <p className="text-sm">36 Fobbing Road<br />Corringham, Essex<br />SS17 9BG</p>
          <p className="text-sm mt-2"><a href="tel:01375768400" className="hover:text-emerald">01375 768400</a></p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-emerald-200">Hours</h4>
          <p className="text-sm">Tuesday - Saturday<br />9:30am - 4:00pm<br />Closed Sunday & Monday</p>
          <div className="mt-4 text-sm space-y-1">
            <Link href="/private-hire" className="block hover:text-emerald">Private Hire</Link>
            <Link href="/event-catering" className="block hover:text-emerald">Event Catering</Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-emerald-200">Follow</h4>
          <a
            href="https://www.facebook.com/share/1CNPd57q6S/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-emerald"
            aria-label="Follow us on Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <span>Facebook</span>
          </a>
          <p className="text-xs mt-4 text-stone-400">
            <Link href="/privacy" className="hover:text-emerald">Privacy Policy</Link>
          </p>
        </div>
      </div>
      <div className="border-t border-emerald-800 py-4 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Emily Rose Tearoom. All rights reserved.
      </div>
    </footer>
  );
}
