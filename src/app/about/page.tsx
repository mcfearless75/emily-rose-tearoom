import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Emily Rose Tearoom in Corringham, Essex. Warm welcoming tea room for breakfasts, cakes, afternoon teas and celebrations. Food Hygiene Rating 5.",
  keywords: [
    "Emily Rose Tearoom",
    "tea room Corringham",
    "cafe Essex",
    "afternoon tea Corringham",
    "breakfast Corringham",
  ],
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-burgundy mb-6 text-center">About Us</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Emily Rose Tearoom is a warm, welcoming tea room on Fobbing Road in Corringham, Essex. We opened in 2025 and love welcoming locals and visitors for hearty breakfasts, fresh sandwiches, homemade cakes and indulgent afternoon teas.
          </p>
          <p className="mb-4">
            Whether you want to eat in, grab a takeaway, or celebrate a birthday, baby shower or special occasion, we look forward to seeing you. We are dog friendly, family style, and offer free WiFi.
          </p>
          <p>
            Our distinctive interior — with burgundy seating and unique wallpaper — creates a relaxed, characterful space for coffee, cake and conversation.
          </p>
        </div>
        <Image
          src="/images/FB_IMG_1792480327397.jpg"
          alt="Interior of Emily Rose Tearoom with burgundy seating"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto"
          unoptimized
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-serif text-xl text-emerald mb-2">Food Hygiene Rating 5</h3>
          <p className="text-sm">Very Good rating from Thurrock Council. We take pride in fresh, safe food.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-serif text-xl text-emerald mb-2">Dog Friendly</h3>
          <p className="text-sm">Well-behaved dogs are welcome. Family style and relaxed atmosphere.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-serif text-xl text-emerald mb-2">Since 2025</h3>
          <p className="text-sm">A new favourite in Corringham for breakfasts, cakes and celebrations.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Image
          src="/images/FB_IMG_1792480401661.jpg"
          alt="Cooked breakfast at Emily Rose Tearoom"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto"
          unoptimized
        />
        <Image
          src="/images/FB_IMG_1792480381489.jpg"
          alt="Afternoon tea at Emily Rose Tearoom"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto"
          unoptimized
        />
      </div>

      <div className="bg-emerald-50 p-8 rounded-lg text-center">
        <h2 className="font-serif text-2xl text-navy mb-3">Come and say hello</h2>
        <p className="mb-4">Open Tuesday–Saturday, 9:30am–4:00pm. 36 Fobbing Road, Corringham SS17 9BG.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="bg-burgundy text-white px-5 py-2 rounded-md font-medium">
            Contact Us
          </Link>
          <Link href="/menu" className="bg-navy text-white px-5 py-2 rounded-md font-medium">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
