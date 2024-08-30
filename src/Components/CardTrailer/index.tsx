import React, { useState } from "react";
import { IconPlayFill } from "../../assets/Icons/index";
import ButtonCloseTrailer from "../ButtonCloseTrailer";

const CardTrailer = () => {
  const [isTrailerOpen, setIsTrailerOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClick = () => {
    setIsTrailerOpen((prev) => !prev);
    setIsLoading(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex max-w-full min-h-[450px] rounded-lg">
      {isTrailerOpen ? (
        <div className="bg-red-700 flex justify-center items-center w-full rounded-lg">
          <button
            onClick={handleClick}
            className="bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 flex items-center justify-center shadow-lg"
          >
            <IconPlayFill className="text-white w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex justify-end items-center mb-2">
            <ButtonCloseTrailer onClick={handleClick} />
          </div>

          {isLoading && (
            <div className="flex justify-center items-center w-full h-full">
              <div className="loader border-t-4 border-b-4 border-red-500 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          )}

          <iframe
            className={`rounded-lg w-full h-full ${
              isLoading ? "hidden" : "block"
            }`}
            src="https://www.youtube.com/embed/kENEWWNWAB0"
            onLoad={handleLoad}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default CardTrailer;
