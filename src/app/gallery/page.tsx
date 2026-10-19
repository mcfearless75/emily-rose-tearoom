import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Emily Rose Tearoom – afternoon teas, cakes and our welcoming space.",
};

const photos = [
  {
    src: "https://media-cdn.tripadvisor.com/media/photo-o/32/3f/f2/ed/emily-rose-tearoom.jpg",
    alt: "Interior of Emily Rose Tearoom with burgundy velvet seating and distinctive wallpaper",
  },
  {
    src: "https://media-cdn.tripadvisor.com/media/photo-o/32/3f/f2/e9/emily-rose-tearoom.jpg",
    alt: "Another view of the welcoming interior at Emily Rose Tearoom",
  },
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-rose-800 mb-8 text-center">Gallery</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={800}
            height={530}
            className="rounded-lg shadow w-full h-auto"
          />
        ))}
      </div>
      <p className="text-center mt-8 text-stone-600">
        More photos coming soon. Follow us on Facebook for the latest from the tearoom.
      </p>
    </div>
  );
}
