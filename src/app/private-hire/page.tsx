import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Private Hire | Book the Tearoom for Events",
  description:
    "Hire Emily Rose Tearoom in Corringham for private events, wakes, baby showers, birthdays and afternoon tea parties. Sundays available for private hire only.",
  keywords: [
    "private hire Corringham",
    "hire tearoom Essex",
    "wakes Corringham",
    "wake venue Essex",
    "baby shower venue Corringham",
    "birthday tea party Essex",
    "private afternoon tea Corringham",
    "Sunday private hire tearoom",
    "Naughty Corner tearoom",
  ],
  openGraph: {
    title: "Private Hire | Emily Rose Tearoom",
    description: "Book exclusive use of our Corringham tearoom for wakes, celebrations and private events. Sundays available for private hire only.",
    type: "website",
  },
};

export default function PrivateHire() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-burgundy mb-4">Private Hire</h1>
      <p className="text-lg text-navy mb-6">
        Host your gathering in the heart of Corringham. Hire the whole tearoom - burgundy seating, tiger wallpaper and the Naughty Corner - for wakes, baby showers, birthdays, bridal gatherings or a private afternoon tea.
      </p>

      <div className="mb-8">
        <Image
          src="/images/FB_IMG_1792480381489.jpg"
          alt="Afternoon tea setup at Emily Rose Tearoom"
          width={800}
          height={500}
          className="rounded-lg shadow w-full h-auto object-cover"
          unoptimized
        />
      </div>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">Why hire our room?</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>Exclusive use of a distinctive space - not a generic function room</li>
        <li>The Naughty Corner and tiger wallpaper make it memorable for photos</li>
        <li>Ideal for intimate groups (around 20-30 guests)</li>
        <li>Flexible packages: afternoon tea on the stand, cakes, sandwiches and drinks</li>
        <li>Friendly team who already know how to look after gatherings of all kinds</li>
        <li>Easy location on Fobbing Road, Corringham (SS17 9BG)</li>
        <li>Sundays available for private hire only</li>
      </ul>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">Popular occasions</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Wakes</h3>
          <p className="text-sm">A quiet, welcoming space for family and friends to gather after a funeral. Afternoon tea, cakes and light refreshments available.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Baby Showers</h3>
          <p className="text-sm">Afternoon tea and homemade cakes in a room that photographs well.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Birthdays</h3>
          <p className="text-sm">Milestone birthdays and family gatherings with character.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Bridal & Hen Events</h3>
          <p className="text-sm">Relaxed but special setting for pre-wedding gatherings.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
          <h3 className="font-medium text-burgundy mb-1">Private Afternoon Tea</h3>
          <p className="text-sm">The birdcage stand and the whole room to yourselves.</p>
        </div>
      </div>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">How to book</h2>
      <p className="mb-4">
        Private hire is available Tuesday-Saturday during opening hours (9:30am-4:00pm), and on <strong>Sundays for private hire only</strong>. Subject to availability - get in touch early, especially for weekends.
      </p>
      <p className="mb-6">
        Call <a href="tel:07564840771" className="text-burgundy font-medium">07564 840771</a> or use the contact form. Tell us the date, guest numbers, occasion (including wakes), and whether you want the Naughty Corner highlighted.
      </p>

      <div className="bg-emerald-50 p-6 rounded-lg">
        <h3 className="font-serif text-xl text-navy mb-2">Ready to book?</h3>
        <p className="mb-4">We’ll help plan a gathering that feels personal and well looked after.</p>
        <Link href="/contact" className="inline-block bg-burgundy text-white px-5 py-2 rounded-md font-medium">
          Enquire Now
        </Link>
      </div>
    </div>
  );
}
