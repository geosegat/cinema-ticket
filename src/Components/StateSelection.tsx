import React from "react";
import { Localizacao, CaretDown } from "../assets/Icons";

interface StateSelectionProps {
  label?: string;
}

const StateSelection: React.FC<StateSelectionProps> = ({ label }) => {
  return (
    <a href="">
      <div className="flex flex-row items-center">
        <Localizacao color="white" />
        <h1 className="text-red-500 font-bold font-sans ml-0.5">
          {label ?? "ELDORADO"}
        </h1>
        <CaretDown className="ml-1.5" color="white" />
      </div>
    </a>
  );
};

export default StateSelection;
