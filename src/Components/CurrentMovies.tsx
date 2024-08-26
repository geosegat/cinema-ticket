import React from "react";

interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: string;
  rating: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Saideira",
    genre: "Comedia",
    duration: "100m",
    rating: "14",
    image: "/images/saideira.jpg",
  },
  {
    id: 2,
    title: "Armadilha",
    genre: "Suspense",
    duration: "105m",
    rating: "14",
    image: "/images/armadilha.jpg",
  },
];

const MovieShowcaseT: React.FC = () => {
  return (
    <div className="bg-black p-6">
      <h2 className="text-white text-3xl mb-6">Em Cartaz</h2>
      <div className="flex overflow-x-scroll space-x-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 rounded-lg p-4 w-48">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg mb-4"
            />

            <h3 className="text-white font-bold">{movie.title}</h3>
            <p className="text-gray-400">{movie.genre}</p>
            <p className="text-gray-400">{movie.duration}</p>
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">
              {movie.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieShowcaseT;
