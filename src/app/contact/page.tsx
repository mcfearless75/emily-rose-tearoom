import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Emily Rose Tearoom in Corringham. Book a table, enquire about afternoon tea or celebrations. Phone 01375 768400. 36 Fobbing Road, SS17 9BG.",
};

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-rose-800 mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Address</strong><br />36 Fobbing Road<br />Corringham, Stanford-le-Hope<br />Essex SS17 9BG</p>
          <p className="mb-2"><strong>Phone</strong><br /><a href="tel:01375768400" className="text-rose-700">01375 768400</a></p>
          <p className="mb-4"><strong>Hours</strong><br />Tuesday - Saturday: 9:30am - 4:00pm<br />Closed Sunday & Monday</p>
          <p className="text-sm text-stone-600">For bookings of afternoon teas, birthdays or baby showers, please use the form or call us.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
