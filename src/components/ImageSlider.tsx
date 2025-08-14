"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    src: "/image1.jpg",
    alt: "Gourmet canapés with microgreens and edible flowers",
  },
  {
    src: "/image2.jpg",
    alt: "Elegant plated dinner service",
  },
  {
    src: "/image3.jpg",
    alt: "Wedding cake and dessert display",
  },
  {
    src: "/image4.jpg",
    alt: "Cocktail hour setup with appetizers",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full bg-teal-200  h-[75vh] overflow-hidden shadow-2xl slider-image">
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
