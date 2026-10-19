import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Menu at Emily Rose Tearoom – breakfasts, sandwiches, cakes, afternoon teas and drinks in Corringham.",
};

export default function Menu() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-rose-800 mb-6">Menu</h1>
      <p className="mb-8 text-stone-600">Our menu changes regularly. Please ask for today’s specials. All items subject to availability. Please inform us of any allergies.</p>

      <section className="mb-10">
        <h2 className="font-serif text-2xl mb-4">Breakfast & Brunch</h2>
        <p>Hearty cooked breakfasts, eggs Benedict, avocado options and more. Served until late morning.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl mb-4">Sandwiches & Lunch</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Fresh sandwiches (including BLT, ham & cheese toasted, chicken & bacon sourdough)</li>
          <li>Served with salad and crisps</li>
          <li>Light bites and toasties</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl mb-4">Homemade Cakes</h2>
        <p>Victoria sponge, cheesecakes, slices and daily specials. Perfect with a pot of tea or coffee.</p>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl mb-4">Afternoon Tea</h2>
        <p>Indulgent afternoon teas with sandwiches, scones, cakes and tea. Ideal for birthdays, baby showers and special occasions. Booking recommended for groups.</p>
      </section>

      <section>
        <h2 className="font-serif text-2xl mb-4">Drinks</h2>
        <p>Great coffee, hot chocolates, a range of teas, and prosecco.</p>
      </section>
    </div>
  );
}
