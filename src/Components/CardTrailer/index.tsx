import React, { useState } from "react";
import { IconCloseCircle, IconPlayFill } from "../../assets/Icons/index";

const CardTrailer = () => {
  const [isTrailerOpen, setIsTralerOpen] = useState<boolean>(true);

  const handleClick = () => {
    setIsTralerOpen((prev) => !prev);
  };

  return (
    <div className=" flex max-w-full min-h-[450px] rounded-lg">
      {isTrailerOpen ? (
        <div className="bg-red-700 flex justify-center items-center w-full">
          <button
            onClick={handleClick}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 flex items-center justify-center shadow-lg"
          >
            <IconPlayFill className="text-white w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className=" w-full  ">
          <div className="flex justify-end text-white text-bold items-center">
            <button onClick={handleClick}>
              <h1> FECHAR TRAILER</h1>
            </button>
          </div>

          <iframe
            className="rounded-lg w-full h-full"
            src="https://www.youtube.com/embed/kENEWWNWAB0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default CardTrailer;
