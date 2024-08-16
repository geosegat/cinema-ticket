import React from "react";
import { Localizacao, CaretDown } from "../assets/Icons";

function StateSelection() {
  return (
    <div className="flex flex-row items-center">
      <Localizacao color="white" />
      <h1 className="text-red-500 font-bold">São Paulo</h1>
      <CaretDown className="ml-2" color="white" />
    </div>
  );
}

export default StateSelection;
