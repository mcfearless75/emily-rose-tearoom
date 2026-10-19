import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Emily Rose Tearoom in Corringham, Essex. Warm welcoming tea room for breakfasts, cakes and celebrations.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-rose-800 mb-6">About Us</h1>
      <p className="mb-4 text-lg">
        Emily Rose Tearoom is a warm, welcoming tea room in Corringham, Essex. We serve hearty cooked breakfasts, fresh sandwiches, homemade cakes and indulgent afternoon teas.
      </p>
      <p className="mb-4">
        Whether you want to eat in, grab a takeaway, or celebrate a birthday or baby shower, we look forward to welcoming you. We are dog friendly, family style, and offer free WiFi.
      </p>
      <p className="mb-4">
        We take pride in our food hygiene standards and hold a Food Hygiene Rating of 5 (Very Good) from Thurrock Council.
      </p>
      <p>
        Come and experience the friendly atmosphere, great coffee, hot chocolates and prosecco.
      </p>
    </div>
  );
}
