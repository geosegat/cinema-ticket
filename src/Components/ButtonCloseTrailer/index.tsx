import { on } from "events";
import React from "react";

interface ButtonCloseTrailerProps {
  onClick?: () => void;
}

const ButtonCloseTrailer: React.FC<ButtonCloseTrailerProps> = ({ onClick }) => {
  return (
    <button
      className="bg-neutral-700 rounded-lg p-3 text-white text-sm font-bold"
      onClick={onClick}
    >
      <h1> FECHAR TRAILER</h1>
    </button>
  );
};

export default ButtonCloseTrailer;
