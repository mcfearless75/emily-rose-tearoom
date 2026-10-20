import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Emily Rose Tearoom in Corringham, Essex. Jewel-toned space with tiger wallpaper and the Naughty Corner. Breakfasts, cakes, afternoon teas and celebrations. Food Hygiene Rating 5.",
  keywords: [
    "Emily Rose Tearoom",
    "tea room Corringham",
    "Naughty Corner",
    "cafe Essex",
    "afternoon tea Corringham",
  ],
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl md:text-5xl text-burgundy mb-6 text-center">About Us</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <p className="text-lg mb-4">
            Emily Rose Tearoom opened in 2025 on Fobbing Road in Corringham. We serve hearty cooked breakfasts, fresh sandwiches, homemade cakes and afternoon tea on the birdcage stand.
          </p>
          <p className="mb-4">
            The room is the thing that sets us apart: burgundy velvet seating, bold tiger wallpaper, and the Naughty Corner. It’s relaxed and family style, dog friendly, with free WiFi — a proper local tearoom rather than a generic café.
          </p>
          <p>
            Whether you’re popping in for breakfast, booking a table for afternoon tea, or hiring the space for a baby shower or birthday, we’re happy to see you.
          </p>
        </div>
        <Image
          src="/images/FB_IMG_1792480327397.jpg"
          alt="Interior of Emily Rose Tearoom with burgundy seating and wallpaper"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto"
          unoptimized
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-serif text-xl text-emerald mb-2">Food Hygiene Rating 5</h3>
          <p className="text-sm">Very Good from Thurrock Council. Fresh food, looked after properly.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-serif text-xl text-emerald mb-2">Dog Friendly</h3>
          <p className="text-sm">Well-behaved dogs welcome. Family style and relaxed.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-serif text-xl text-emerald mb-2">The Naughty Corner</h3>
          <p className="text-sm">Our signature spot — ask for it when you book.</p>
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
