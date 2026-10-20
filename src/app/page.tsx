import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white">
        <Image
          src="https://media-cdn.tripadvisor.com/media/photo-o/32/3f/f2/ed/emily-rose-tearoom.jpg"
          alt="Interior of Emily Rose Tearoom with burgundy seating and unique wallpaper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">Emily Rose Tearoom</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Warm, welcoming tea room serving hearty cooked breakfasts, fresh sandwiches, homemade cakes & indulgent afternoon teas.
          </p>
          <Link href="/contact" className="bg-burgundy hover:bg-burgundy text-white px-6 py-3 rounded-md font-medium">
            Book a Table
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl text-burgundy mb-4">Welcome</h2>
            <p className="mb-4">
              A warm, welcoming tea room serving hearty cooked breakfasts, fresh sandwiches, homemade cakes and indulgent afternoon teas. Great coffee, hot chocolates and prosecco too.
            </p>
            <p className="mb-4">
              Eat in, take away, or celebrate birthdays and baby showers with us. Dog friendly and family style with free WiFi.
            </p>
            <p>Food Hygiene Rating: 5 (Very Good).</p>
          </div>
          <Image
            src="https://media-cdn.tripadvisor.com/media/photo-o/32/3f/f2/e9/emily-rose-tearoom.jpg"
            alt="Another view inside Emily Rose Tearoom"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl text-navy mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-serif text-xl text-emerald mb-2">Breakfasts</h3>
              <p>Hearty cooked breakfasts and brunch favourites to start your day.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-serif text-xl text-emerald mb-2">Sandwiches & Lunch</h3>
              <p>Fresh sandwiches on great bread, plus light bites.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-serif text-xl text-emerald mb-2">Afternoon Teas</h3>
              <p>Indulgent afternoon teas perfect for celebrations.</p>
            </div>
          </div>
          <Link href="/menu" className="inline-block mt-8 text-burgundy font-medium hover:underline">View Menu →</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl text-center text-navy mb-8">Find Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-2"><strong>36 Fobbing Road</strong><br />Corringham, Stanford-le-Hope<br />Essex SS17 9BG</p>
            <p className="mb-2"><a href="tel:07564840771" className="text-burgundy">07564 840771</a></p>
            <p className="mb-4">Tuesday – Saturday: 9:30am – 4:00pm<br />Closed Sunday & Monday</p>
            <a href="https://maps.google.com/?q=36+Fobbing+Road+Corringham+SS17+9BG" target="_blank" rel="noopener" className="text-burgundy hover:underline">Get Directions</a>
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
