import { useState } from "react";
import logo from "../assets/pexels-solliefoto-298863.jpg";

interface VenueGalleryProps {
  images: string[];
}

const VenueGallery = ({ images }: VenueGalleryProps) => {
  const images1 = [
    "../assets/pexels-daiangan-102129.jpg",
    "../assets/pexels-kaip-996329.jpg",
    "../assets/pexels-pixabay-325876.jpg",
    "../assets/pexels-solliefoto-298863.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrevious = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  console.log(images[currentImage]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <img
          src={images[currentImage]}
          //   src={logo}
          alt="Venue"
          className="h-full w-full object-cover"
        />
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-transform hover:scale-110"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-transform hover:scale-110"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`overflow-hidden rounded-lg border-2 transition-colors ${
              currentImage === index
                ? "border-rose-600"
                : "border-transparent hover:border-rose-300"
            }`}
          >
            <img
              src={image}
              alt={`Venue thumbnail ${index + 1}`}
              className="aspect-video w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VenueGallery;
