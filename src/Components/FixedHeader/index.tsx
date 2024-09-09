import React from "react";
import HeaderMenu from "../HeaderMenu";
import StateSelection from "../StateSelection";
import SearchMovies from "../SearchMovieButton";
import { IconUser } from "../../assets/Icons";

interface FixedHeaderProps {
  onClickSearchMovies?: () => void;
}

const FixedHeader: React.FC<FixedHeaderProps> = ({ onClickSearchMovies }) => {
  return (
    <header className="fixed top-0 w-full p-6 bg-black flex items-center justify-between max-w-screen-lg mx-auto z-50">
      <HeaderMenu />
      <div className="flex items-center space-x-2">
        <StateSelection label="São Paulo" />
        <SearchMovies onClick={onClickSearchMovies} />
        <IconUser width={20} height={20} className="ml-3" color="white" />
      </div>
    </header>
  );
};

export default FixedHeader;
