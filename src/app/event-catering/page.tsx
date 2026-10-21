import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Catering | Afternoon Teas & Cakes for Hire",
  description:
    "Event catering from Emily Rose Tearoom in Corringham. Afternoon teas, homemade cakes, sandwiches and platters for parties, corporate events and celebrations across Essex.",
  keywords: [
    "event catering Corringham",
    "afternoon tea catering Essex",
    "cake catering Thurrock",
    "party catering Stanford-le-Hope",
    "tea party catering Essex",
    "corporate catering Corringham",
  ],
  openGraph: {
    title: "Event Catering | Emily Rose Tearoom",
    description: "Homemade afternoon teas, cakes and platters for your events in Essex.",
    type: "website",
  },
};

export default function EventCatering() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-burgundy mb-4">Event Catering</h1>
      <p className="text-lg text-navy mb-6">
        Bring the taste of Emily Rose Tearoom to your event. We offer catering for parties, corporate gatherings, baby showers, and celebrations across Corringham, Stanford-le-Hope and the wider Essex area.
      </p>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">What We Can Provide</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Afternoon tea platters</strong> - sandwiches, scones, cakes and treats</li>
        <li><strong>Homemade cakes & desserts</strong> - slices, whole cakes, or celebration cakes</li>
        <li><strong>Sandwich and savoury selections</strong> - perfect for meetings and buffets</li>
        <li><strong>Breakfast and brunch boxes</strong> - for morning events</li>
        <li><strong>Drinks</strong> - tea, coffee, and soft drinks options</li>
        <li>Flexible quantities to suit groups of any size</li>
      </ul>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">Ideal For</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Parties & Celebrations</h3>
          <p className="text-sm">Baby showers, birthdays, and family gatherings.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Corporate Events</h3>
          <p className="text-sm">Meetings, team days, and client hospitality.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Afternoon Tea Events</h3>
          <p className="text-sm">Full tea service delivered or collected.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-burgundy mb-1">Special Occasions</h3>
          <p className="text-sm">Any event that needs delicious homemade food.</p>
        </div>
      </div>

      <h2 className="font-serif text-2xl text-emerald mt-8 mb-3">How It Works</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        <li>Get in touch with your event date, guest numbers, and preferences</li>
        <li>We’ll discuss options and provide a quote</li>
        <li>Confirm your order in advance so we can prepare fresh</li>
        <li>Collect from the tearoom or arrange delivery where possible</li>
      </ol>

      <p className="mb-6">
        All food is prepared fresh in our kitchen (Food Hygiene Rating 5). Dietary requirements can usually be accommodated - just let us know when you enquire.
      </p>

      <div className="bg-emerald-50 p-6 rounded-lg">
        <h3 className="font-serif text-xl text-navy mb-2">Plan your event</h3>
        <p className="mb-4">Call <a href="tel:07564840771" className="text-burgundy font-medium">07564 840771</a> or send us a message to discuss catering for your next gathering.</p>
        <Link href="/contact" className="inline-block bg-burgundy text-white px-5 py-2 rounded-md font-medium">
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
