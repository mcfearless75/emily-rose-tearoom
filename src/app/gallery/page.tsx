import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Emily Rose Tearoom – afternoon teas, cakes, breakfasts and our welcoming space in Corringham.",
};

const photos = [
  { src: "/images/FB_IMG_1792480381489.jpg", alt: "Afternoon tea stand with cakes and treats" },
  { src: "/images/FB_IMG_1792480401661.jpg", alt: "Cooked breakfast" },
  { src: "/images/FB_IMG_1792480274249.jpg", alt: "Fresh sandwich" },
  { src: "/images/FB_IMG_1792480303582.jpg", alt: "Homemade cakes" },
  { src: "/images/FB_IMG_1792480333462.jpg", alt: "Cakes under glass" },
  { src: "/images/FB_IMG_1792480327397.jpg", alt: "Interior with burgundy seating" },
  { src: "/images/FB_IMG_1792480314942.jpg", alt: "Cake counter" },
  { src: "/images/FB_IMG_1792480284945.jpg", alt: "Avocado toast" },
  { src: "/images/FB_IMG_1792480306241.jpg", alt: "More cakes and treats" },
  { src: "/images/FB_IMG_1792480320795.jpg", alt: "Waffles or dessert" },
  { src: "/images/FB_IMG_1792480338508.jpg", alt: "Tearoom interior detail" },
  { src: "/images/FB_IMG_1792480368758.jpg", alt: "Food from the tearoom" },
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-serif text-4xl text-burgundy mb-8 text-center">Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={800}
            height={530}
            className="rounded-lg shadow w-full h-auto object-cover"
          />
        ))}
      </div>
      <p className="text-center mt-8 text-stone-600">
        More photos coming soon. Follow us on Facebook for the latest from the tearoom.
      </p>
    </div>
  );
}
