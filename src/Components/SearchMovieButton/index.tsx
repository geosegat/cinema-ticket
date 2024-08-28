import React from "react";
import { IconSearch } from "../../assets/Icons/index";

interface SearchMovieProps {
  onClick?: () => void;
}

const SearchMovies: React.FC<SearchMovieProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="flex flex-row items-center">
      <IconSearch width={20} height={20} color="white" />
      <h1 className="text-white font-bold">ENCONTRE UM FILME</h1>
    </button>
  );
};

export default SearchMovies;
