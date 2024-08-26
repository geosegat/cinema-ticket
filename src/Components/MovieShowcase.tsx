import React, { useEffect, useState } from "react";
import axios from "axios";
import CardButton from "./CardButton";
import ButtonBuyTicket from "./ButtonBuyTicket";

const auth =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzI5ZDZkOTE4YjEwYjIxMzE0ZDcyNzk5ZDc1ZWVmYyIsIm5iZiI6MTcyNDM3MzYzOS44MzYzOTksInN1YiI6IjY2YmI4YzZkYjBmYWRhMzg1MGMzMzEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EU_dH40JMVAAObYWuHGk6OHSdix8r7k0JGgdvMzfH8s";
const baseUrl = "https://image.tmdb.org/t/p/";
const size = "original";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

const MovieShowcase: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionClass, setTransitionClass] = useState(
    "transition-transform duration-500"
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              include_adult: false,
              include_video: false,
              language: "pt-BR",
              page: 2,
              sort_by: "popularity.desc",
            },
            headers: {
              accept: "application/json",
              Authorization: auth,
            },
          }
        );
        setMovies(response.data.results.slice(0, 7));
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
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

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
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
                className="object-cover w-full h-full rounded-xl"
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
          <ButtonBuyTicket />
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
