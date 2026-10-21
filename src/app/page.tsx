import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/FB_IMG_1792480381489.jpg"
          alt="Afternoon tea stand at Emily Rose Tearoom"
          fill
          className="object-cover hero-zoom"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm tracking-widest uppercase text-emerald-200 mb-2">Corringham, Essex · Since 2025</p>
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Emily Rose Tearoom</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Cooked breakfasts, homemade cakes and afternoon tea in a jewel-toned room with tiger wallpaper and the Naughty Corner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:01375768400" className="cta-primary bg-burgundy hover:bg-burgundy text-white px-6 py-3 rounded-md font-medium text-lg">
              Call 01375 768400
            </a>
            <Link href="/contact" className="bg-white text-navy px-6 py-3 rounded-md font-medium border border-white/40">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl text-burgundy mb-4">Not your average tearoom</h2>
            <p className="mb-4">
              We’re a proper Corringham tea room - hearty cooked breakfasts, proper sandwiches, cakes under cloches, and afternoon tea served on the birdcage stand. Great coffee, hot chocolate and prosecco too.
            </p>
            <p className="mb-4">
              The room itself is the difference: burgundy velvet seating, bold tiger wallpaper, and the Naughty Corner for when you want a bit of fun. Dog friendly, family style, free WiFi, and a Food Hygiene Rating of 5.
            </p>
            <p className="text-sm text-stone-500">Open Tuesday-Saturday, 9:30am-4:00pm · Closed Sunday & Monday (Sundays available for private hire only)</p>
          </div>
          <Image
            src="/images/FB_IMG_1792480401661.jpg"
            alt="Hearty cooked breakfast at Emily Rose Tearoom"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
            unoptimized
          />
        </div>
      </section>

      <section className="bg-emerald-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center reveal">
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-2xl text-burgundy">★★★★★</span>
          </div>
          <h2 className="font-serif text-3xl text-navy mb-1">5 stars on Google</h2>
          <p className="text-stone-600 mb-6">From 38 reviews</p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm italic">“Lovely place, great food and friendly service. The cakes are delicious.”</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm italic">“Beautiful tearoom with a unique feel. Perfect for a special afternoon tea.”</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm italic">“Hearty breakfast and a warm welcome. Will definitely be back.”</p>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/uQRgxaiZ3BDZ55g18" target="_blank" rel="noopener" className="inline-block mt-6 text-burgundy font-medium hover:underline">
            Read more on Google
          </a>
        </div>
      </section>

      <section className="bg-navy text-white py-16 reveal">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/images/FB_IMG_1792480388797.jpg"
            alt="Naughty Corner seating at Emily Rose Tearoom"
            width={600}
            height={450}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            unoptimized
          />
          <div>
            <h2 className="font-serif text-3xl mb-4">The Naughty Corner</h2>
            <p className="mb-4 text-stone-200">
              Every good tearoom needs a corner with a bit of character. Ours has the sign, the burgundy seats, and the tiger wallpaper. Perfect for a quiet coffee, a long lunch, or the start of a celebration.
            </p>
            <p className="mb-6 text-stone-200">
              Ask for it when you book, or hire the whole room for something special.
            </p>
            <Link href="/private-hire" className="inline-block bg-burgundy text-white px-5 py-2 rounded-md font-medium">
              Enquire about private hire
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-16 reveal">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-navy mb-2">What we do well</h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">Signature things you’ll actually find on the table, not just on the menu description.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="offer-card bg-white p-6 rounded-lg shadow text-left">
              <h3 className="font-serif text-xl text-emerald mb-2">Proper cooked breakfasts</h3>
              <p className="text-sm">Eggs, bacon, sausages, beans, toast and all the extras. The full plate, done properly.</p>
            </div>
            <div className="offer-card bg-white p-6 rounded-lg shadow text-left">
              <h3 className="font-serif text-xl text-emerald mb-2">Homemade cakes under glass</h3>
              <p className="text-sm">Slices, whole cakes, and the ones that disappear by mid-afternoon. Ask what’s on today.</p>
            </div>
            <div className="offer-card bg-white p-6 rounded-lg shadow text-left">
              <h3 className="font-serif text-xl text-emerald mb-2">Afternoon tea on the stand</h3>
              <p className="text-sm">Sandwiches, scones, cakes and treats on the birdcage stand. Ideal for birthdays and baby showers.</p>
            </div>
          </div>
          <Link href="/menu" className="inline-block mt-8 text-burgundy font-medium hover:underline">See the menu →</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 reveal">
        <h2 className="font-serif text-3xl text-center text-navy mb-8">Find Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-2"><strong>36 Fobbing Road</strong><br />Corringham, Stanford-le-Hope<br />Essex SS17 9BG</p>
            <p className="mb-4 text-lg"><a href="tel:01375768400" className="text-burgundy font-medium">01375 768400</a></p>
            <p className="mb-2">Tuesday - Saturday: 9:30am - 4:00pm<br />Closed Sunday & Monday</p>
            <p className="mb-4 text-sm text-stone-600">Sundays available for private hire only - <Link href="/private-hire" className="text-burgundy hover:underline">enquire here</Link></p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:01375768400" className="cta-primary bg-burgundy text-white px-5 py-2 rounded-md font-medium text-center">Call now</a>
              <a href="https://maps.app.goo.gl/uQRgxaiZ3BDZ55g18" target="_blank" rel="noopener" className="text-burgundy hover:underline self-center">Get Directions</a>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.0!2d0.466!3d51.526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzMzLjYiTiAwwrAyNyc1Ny42IkU!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Emily Rose Tearoom"
            />
          </div>
        </div>
      </section>
    </>
  );
}
