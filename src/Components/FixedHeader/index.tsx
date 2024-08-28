import React from "react";
import HeaderMenu from "../HeaderMenu";
import StateSelection from "../StateSelection";
import SearchMovies from "../SearchMovieButton";
import { IconUser } from "../../assets/Icons";

interface FixedHeaderProps {
  onClickSearchMovies: () => void;
}

const FixedHeader: React.FC<FixedHeaderProps> = ({ onClickSearchMovies }) => {
  return (
    <header className="fixed top-0 w-full  bg-black p-6 flex items-center max-w-screen-lg mx-auto z-50">
      <HeaderMenu />
      <StateSelection label="São Paulo" />
      <SearchMovies onClick={onClickSearchMovies} />
      <IconUser width={20} height={20} className="ml-3" color="white" />
    </header>
  );
};

export default FixedHeader;
