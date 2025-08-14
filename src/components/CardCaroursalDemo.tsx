import React from "react";
import { CardCarousel } from "./CardCarousel";

const CardCaroursalDemo = () => {
  const images = [
    { src: "/wedding2.jpg", alt: "Image 1" },
    { src: "/wedding3.jpg", alt: "Image 2" },
    { src: "/wedding1.jpg", alt: "Image 3" },
    { src: "/wedding5.jpg", alt: "Image 5" },
    { src: "/wedding6.jpg", alt: "Image 6" },
  ];

  return (
    <div className="w-full" id="events">
      <h1 className="md:text-6xl text-4xl font-caslon font-extralight capitalize text-primary text-center">
        our portfolio
      </h1>
      <p className="max-w-xl text-center mx-auto mt-3 mb-8 text-gray-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
        reprehenderit accusantium dicta error.
      </p>
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCaroursalDemo;
