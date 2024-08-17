import React from "react";
import HeaderMenu from "./Components/HeaderMenu";
import StateSelection from "./Components/StateSelection";
import SearchMovies from "./Components/SearchMovies";
import { IconUser } from "./assets/Icons";

function App() {
  return (
    <div className="bg-black h-screen ">
      <div className="flex flex-row items-center">
        <HeaderMenu />
        <StateSelection label="São Paulo" />
        <SearchMovies />
        <IconUser width={20} height={20} className="ml-3" color="white" />
      </div>
    </div>
  );
}

export default App;
