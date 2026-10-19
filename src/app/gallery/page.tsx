import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Emily Rose Tearoom – afternoon teas, cakes and our welcoming space.",
};

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-rose-800 mb-8 text-center">Gallery</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Image src="/images/Lujia.jpg" alt="Tea room table setting with afternoon tea" width={800} height={530} className="rounded-lg shadow" />
        <Image src="/images/np0gd.jpg" alt="Homemade cakes, scones and sandwiches" width={800} height={530} className="rounded-lg shadow" />
      </div>
      <p className="text-center mt-8 text-stone-600">More photos coming soon. Follow us on Facebook for the latest.</p>
    </div>
  );
}
