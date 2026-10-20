import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-stone-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl text-white mb-2">Emily Rose Tearoom</h3>
          <p className="text-sm">36 Fobbing Road<br />Corringham, Essex<br />SS17 9BG</p>
          <p className="text-sm mt-2"><a href="tel:07564840771" className="hover:text-emerald">07564 840771</a></p>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-emerald-200">Hours</h4>
          <p className="text-sm">Tuesday – Saturday<br />9:30am – 4:00pm<br />Closed Sunday & Monday</p>
          <div className="mt-4 text-sm space-y-1">
            <Link href="/private-hire" className="block hover:text-emerald">Private Hire</Link>
            <Link href="/event-catering" className="block hover:text-emerald">Event Catering</Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2 text-emerald-200">Follow</h4>
          <a href="https://www.facebook.com/people/Emily-Rose-Tearoom/61572200604791/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-emerald">Facebook</a>
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
