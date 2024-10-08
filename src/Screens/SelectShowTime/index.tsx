import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardTrailer from "../../Components/CardTrailer";
import FixedHeader from "../../Components/FixedHeader";
import CurrentMovies from "../../Components/CurrentMovies";
import CardMovieDetails from "../../Components/CardMovieDetails";
import CardDropDown from "../../Components/CardDropDown";
import CardShowTime from "../../Components/CardShowTime";
import CardSessionInfo from "../../Components/CardSessionInfo";

const baseUrl = "https://image.tmdb.org/t/p/";
const size = "w200";

const SelectShowTime: React.FC = () => {
  const navigate = useNavigate();

  const handleSearchMovie = () => {
    navigate("/search-movie");
  };
  const location = useLocation();
  const movie = location.state?.movie as {
    title: string;
    poster_path: string;
    backdrop_path: string;
  };

  const handleBuyTicket = () => {
    alert(`Filme ${movie?.title} comprado com sucesso!`);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <FixedHeader onClickSearchMovies={handleSearchMovie} />
      <main className="pt-24 w-full max-w-screen-lg mx-auto flex flex-col ">
        <CardTrailer />
        <div className="flex mt-24  ">
          <CardMovieDetails />
          <div>
            <div className="px-5  ">
              <div className="space-x-1 ">
                <CardDropDown />
                <CardDropDown pag={1} />
                <CardDropDown pag={2} />
              </div>

              <div className=" space-x-1  ">
                <CardShowTime classname="mt-24" />
                <CardShowTime classname="mt-12" />
              </div>
            </div>
          </div>
        </div>
        <CurrentMovies />
      </main>
    </div>
  );
};

export default SelectShowTime;
