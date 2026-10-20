import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Private Hire | Book the Tearoom for Events",
  description:
    "Hire Emily Rose Tearoom in Corringham for private events, baby showers, birthdays, afternoon tea parties and celebrations. Exclusive use of our welcoming space in Essex.",
  keywords: [
    "private hire Corringham",
    "hire tearoom Essex",
    "baby shower venue Corringham",
    "birthday tea party Essex",
    "private afternoon tea Corringham",
    "event venue Stanford-le-Hope",
  ],
  openGraph: {
    title: "Private Hire | Emily Rose Tearoom",
    description: "Book exclusive use of our Corringham tearoom for celebrations and private events.",
    type: "website",
  },
};

export default function PrivateHire() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-burgundy mb-4">Private Hire</h1>
      <p className="text-lg text-navy mb-6">
        Host your celebration in the heart of Corringham. Emily Rose Tearoom is available for private hire — perfect for baby showers, birthdays, bridal gatherings, and special afternoon teas.
      </p>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">Why Hire Our Tearoom?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Exclusive use of our stylish, welcoming space with unique decor</li>
        <li>Ideal for intimate gatherings of up to around 20–30 guests</li>
        <li>Beautiful setting for photos and celebrations</li>
        <li>Flexible packages including afternoon tea, cakes, and drinks</li>
        <li>Friendly team on hand to help make the day special</li>
        <li>Convenient location on Fobbing Road, Corringham (SS17 9BG)</li>
      </ul>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">Popular Occasions</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Baby Showers</h3>
          <p className="text-sm">Celebrate the arrival of a little one with afternoon tea and homemade cakes.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Birthdays</h3>
          <p className="text-sm">A memorable venue for milestone birthdays and family gatherings.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Bridal & Hen Events</h3>
          <p className="text-sm">Relaxed, elegant setting for pre-wedding celebrations.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Afternoon Tea Parties</h3>
          <p className="text-sm">Private afternoon tea experiences tailored to your group.</p>
        </div>
      </div>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">How to Book</h2>
      <p className="mb-4">
        Private hire is available during our opening hours (Tuesday–Saturday, 9:30am–4:00pm) subject to availability. We recommend booking in advance, especially for weekends.
      </p>
      <p className="mb-6">
        Call us on <a href="tel:07564840771" className="text-burgundy font-medium">07564 840771</a> or use the contact form to discuss your requirements, guest numbers, and preferred date.
      </p>

      <div className="bg-emerald-50 p-6 rounded-lg">
        <h3 className="font-serif text-xl text-navy mb-2">Ready to celebrate?</h3>
        <p className="mb-4">Get in touch and we’ll help plan a special occasion at Emily Rose Tearoom.</p>
        <Link href="/contact" className="inline-block bg-burgundy text-white px-5 py-2 rounded-md font-medium">
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
