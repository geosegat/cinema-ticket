import React from "react";

interface CardDropDownProps {}

const dates = [
  ["Hoje, 28 Ago", "Qui, 29 Ago", "Sex, 30 Ago", "Sab, 31 Ago", "Dom, 01 Set"],
];

const CardShowTime: React.FC<CardDropDownProps> = () => {
  return (
    <button
      className="bg-gray-700  min-h-[160px] 
     text-white font-bold text-sm flex justify-center pt-5 rounded-lg px-5"
    >
      Qui, 29 Ago, 19:30
    </button>
  );
};

export default CardShowTime;
