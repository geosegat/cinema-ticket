import React from "react";
import HeaderMenu from "./Components/HeaderMenu";
import StateSelection from "./Components/StateSelection";
import SearchMovies from "./Components/SearchMovies";
import { IconUser } from "./assets/Icons";
import MovieShowcase from "./Components/MovieShowcase";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <header className="fixed top-0 left-0 w-full bg-black p-6 flex items-center justify-center z-50">
        <HeaderMenu />
        <StateSelection label="São Paulo" />
        <SearchMovies />
        <IconUser width={20} height={20} className="ml-3" color="white" />
      </header>
      <main className="pt-24 w-full max-w-screen-lg mx-auto flex flex-col items-center">
        <MovieShowcase />
        <MovieShowcase />
        <MovieShowcase />
        <MovieShowcase />
        <MovieShowcase />
        <MovieShowcase />
        <MovieShowcase />
        <MovieShowcase />
      </main>
    </div>
  );
}

export default App;
