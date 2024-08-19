import React, { useState } from "react";
import backgroundImage1 from "../assets/images/banner1.jpg";
import backgroundImage2 from "../assets/images/banner2.jpg";
import backgroundImage3 from "../assets/images/banner3.jpg";
import backgroundImage4 from "../assets/images/banner4.jpg";
import CardButton from "./CardButton";

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
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt="Movie Banner"
        className="object-cover w-full h-full"
      />
      <CardButton onPressLeft={handlePrevious} />
      <CardButton onPressRight={handleNext} right />
    </div>
  );
};

export default MovieShowcase;
