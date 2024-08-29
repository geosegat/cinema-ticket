import React, { useState } from "react";
import { IconCloseCircle, IconPlayFill } from "../../assets/Icons/index";

const CardTrailer = () => {
  const [isTrailerOpen, setIsTralerOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsTralerOpen((prev) => !prev);
  };

  return (
    <div className="">
      {isTrailerOpen ? (
        <div className="bg-red-700 flex justify-center ">
          <button
            onClick={handleClick}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 flex items-center justify-center shadow-lg"
          >
            <IconPlayFill className="text-white w-6 h-6" />
          </button>
        </div>
      ) : (
        <button onClick={handleClick}>
          <IconCloseCircle className="h-6 w-6 text-white" />
          <iframe
            className=" rounded-lg"
            src="https://www.youtube.com/embed/kENEWWNWAB0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </button>
      )}
    </div>
  );
};

export default CardTrailer;
