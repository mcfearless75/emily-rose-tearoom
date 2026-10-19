"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Thank you – we’ll be in touch soon.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please call us instead.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
        <input id="name" name="name" required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
        <input id="email" name="email" type="email" required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
        <input id="phone" name="phone" type="tel" className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
        <select id="subject" name="subject" className="w-full border rounded px-3 py-2">
          <option>General enquiry</option>
          <option>Booking / Afternoon tea</option>
          <option>Birthday or celebration</option>
          <option>Baby shower</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
        <textarea id="message" name="message" rows={5} required className="w-full border rounded px-3 py-2" />
      </div>
      <button type="submit" className="bg-rose-700 text-white px-6 py-2 rounded hover:bg-rose-800">
        Send Message
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
