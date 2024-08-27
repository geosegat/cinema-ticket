import React, { useState } from "react";
import CurrentMovies from "../../../Components/CurrentMovies";
import InputSearchMovie from "../../../Components/InputSerachMovie";
import { useNavigate } from "react-router-dom";

function SearchMovie() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleHome = () => {
    navigate("/");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-black items-center justify-center z-50">
        <InputSearchMovie
          onClick={handleHome}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <main className="pt-24 w-full max-w-screen-lg mx-auto flex flex-col items-center">
        <CurrentMovies searchTerm={searchTerm} />
      </main>
    </div>
  );
}

export default SearchMovie;
