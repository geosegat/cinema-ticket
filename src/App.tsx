import React from "react";
import HeaderMenu from "./Components/HeaderMenu";
import StateSelection from "./Components/StateSelection";

function App() {
  return (
    <div className="bg-black h-screen ">
      <div className="flex flex-row items-center">
        <HeaderMenu />
        <StateSelection />
      </div>
    </div>
  );
}

export default App;
