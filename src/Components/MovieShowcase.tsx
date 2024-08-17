import React, { useState } from "react";
import backgroundImage1 from "../assets/images/banner1.jpg";
import backgroundImage2 from "../assets/images/banner2.jpg";
import backgroundImage3 from "../assets/images/banner3.jpg";
import backgroundImage4 from "../assets/images/banner4.jpg";

const images = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
  backgroundImage4,
];

const MovieShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="relative bg-cover bg-center w-full h-64 md:h-80 lg:h-96"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        borderRadius: 20,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          Filme em Destaque
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg mt-2 md:mt-4">
          Descrição ou tagline do filme.
        </p>
        <button className="mt-4 px-4 py-2 md:px-6 md:py-3 bg-red-500 text-white font-semibold rounded">
          Comprar Ingresso
        </button>
      </div>
      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-800 bg-opacity-50 text-white rounded-full"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-800 bg-opacity-50 text-white rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default MovieShowcase;
