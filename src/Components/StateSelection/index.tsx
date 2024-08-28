import React from "react";
import { Localizacao, CaretDown } from "./../../assets/Icons";

interface StateSelectionProps {
  label?: string;
}

const StateSelection: React.FC<StateSelectionProps> = ({ label }) => {
  return (
    <button>
      <div className="flex flex-row items-center">
        <Localizacao color="red" />
        <h1 className="text-red-500 font-bold font-sans ml-0.5">
          {label ?? "ELDORADO"}
        </h1>
        <CaretDown width={20} height={20} className="ml-1.5" color="white" />
      </div>
    </button>
  );
};

export default StateSelection;
