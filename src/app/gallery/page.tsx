import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Emily Rose Tearoom – afternoon teas, cakes, breakfasts and our welcoming space in Corringham.",
};

const photos = [
  { src: "/images/afternoon-tea.jpg", alt: "Afternoon tea stand with cakes, sandwiches and treats" },
  { src: "/images/breakfast.jpg", alt: "Hearty cooked breakfast with eggs, bacon, sausages and beans" },
  { src: "/images/sandwich.jpg", alt: "Fresh toasted sandwich with salad and chips" },
  { src: "/images/cakes.jpg", alt: "Homemade cakes under glass cloches" },
  { src: "/images/waffles.jpg", alt: "Biscoff waffles with sauce" },
  { src: "/images/interior.jpg", alt: "Burgundy seating and tiger wallpaper interior" },
  { src: "/images/counter.jpg", alt: "Cake counter with homemade treats" },
  { src: "/images/avocado-toast.jpg", alt: "Avocado toast with eggs" },
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
