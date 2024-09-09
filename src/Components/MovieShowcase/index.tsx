import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/movieServices";
import CardButton from "../CardButton";
import ButtonBuyTicket from "../ButtonBuyTicket";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/";
const size = "original";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

interface MovieShowcaseProps {
  page?: number;
}

const MovieShowcase: React.FC<MovieShowcaseProps> = ({ page = 1 }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState(
    "transition-transform duration-500"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const results = await fetchMovies(page);
        setMovies(results.slice(0, 15));
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    setTransitionClass("transition-transform duration-500 ease-in-out");
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleBuyTicket = () => {
    const currentMovie = movies[currentIndex];
    navigate(`/select-showtime`, { state: { movie: currentMovie } });
  };

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl ">
      {movies.length > 0 && (
        <div
          className={`flex ${transitionClass} absolute w-full h-full`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative flex-shrink-0 w-full h-full"
            >
              <img
                src={`${baseUrl}${size}${movie.backdrop_path}`}
                alt={movie.title}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}
      <div className="absolute bottom-0 w-full p-4">
        <h1 className="text-white font-bold text-4xl mb-4">
          {currentMovie?.title}
        </h1>
        <div className="flex items-center justify-between">
          <ButtonBuyTicket onClickBuyTicket={handleBuyTicket} />
          <div className="flex space-x-0.5">
            <CardButton onPressLeft={handlePrevious} />
            <CardButton onPressRight={handleNext} right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieShowcase;
