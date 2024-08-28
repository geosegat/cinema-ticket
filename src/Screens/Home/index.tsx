import React from "react";
import MovieShowcase from "../../Components/MovieShowcase";
import CurrentMovies from "../../Components/CurrentMovies";
import { useNavigate } from "react-router-dom";
import FixedHeader from "../../Components/FixedHeader";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchMovie = () => {
    navigate("/search-movie");
  };

  const handleBuyTicketMovie = () => {
    navigate("/select-showtime");
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <FixedHeader onClickSearchMovies={handleSearchMovie} />
      <main className="pt-24 w-full max-w-screen-lg mx-auto flex flex-col items-center">
        <MovieShowcase />
        <CurrentMovies />
      </main>
    </div>
  );
};

export default Home;
