import { on } from "events";
import React from "react";

interface ButtonCloseTrailerProps {
  onClick?: () => void;
}

const ButtonCloseTrailer: React.FC<ButtonCloseTrailerProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <h1> FECHAR TRAILER</h1>
    </button>
  );
};

export default ButtonCloseTrailer;
