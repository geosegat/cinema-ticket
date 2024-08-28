import React from "react";
import { IconCloseCircle } from "./../../assets/Icons";

interface InputSearchMovieProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const InputSearchMovie: React.FC<InputSearchMovieProps> = ({
  value,
  onChange,
  onClick,
}) => {
  return (
    <div className="bg-neutral-800 text-white flex items-center justify-center p-6">
      <button className="mr-2" onClick={onClick}>
        <IconCloseCircle className="text-gray-400 w-10 h-8" />
      </button>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="bg-neutral-800 outline-none text-white placeholder-gray-400"
        placeholder="Busque seu filme aqui..."
      />
    </div>
  );
};

export default InputSearchMovie;
