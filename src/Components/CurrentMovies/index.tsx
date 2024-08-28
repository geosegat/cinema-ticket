import React, { useEffect, useState } from "react";
import { fetchMovies, Movie as ApiMovie } from "../movieServices";
import CardButton from "../CardButton";

interface CurrentMoviesProps {
  searchTerm?: string;
}

const CurrentMovies: React.FC<CurrentMoviesProps> = ({ searchTerm = "" }) => {
  const [movies, setMovies] = useState<ApiMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const results = await fetchMovies(1);
        setMovies(results.slice(0, 15));
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("movies-container");
    if (container) {
      const scrollAmount = direction === "right" ? 880 : -880;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-black p-6 flex justify-center items-center">
        <p className="text-white">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-lg">
      <div className="flex row-auto items-center justify-between mb-5">
        <h2 className="text-white text-3xl font-bold">Em Cartaz</h2>
        <div className="flex space-x-1">
          <CardButton onPressLeft={() => handleScroll("left")} />
          <CardButton onPressRight={() => handleScroll("right")} right />
        </div>
      </div>

      <div
        id="movies-container"
        className="flex overflow-x-auto scrollbar-hide space-x-1 snap-x snap-mandatory w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {filteredMovies.map((movie) => (
          <button
            key={movie.id}
            className="flex-shrink-0 w-1/6 min-w-[150px] rounded-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg mb-1 h-[225px] w-full object-cover"
            />
            <div className="bg-neutral-800 rounded-lg p-2 flex justify-between flex-col h-[100px]">
              <h1 className="text-white font-bold text-left leading-tight">
                {movie.title}
              </h1>
              <div className="flex">
                <h1 className="text-white text-sm">Cómedia</h1>
                <h1 className="text-white text-sm">-105m</h1>
                <h1 className="text-white text-sm">18</h1>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrentMovies;
