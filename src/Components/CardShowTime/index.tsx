import React from "react";
import CardSessionInfo from "../CardSessionInfo";

interface CardDropDownProps {
  classname?: string;
}

const dates = [
  ["Hoje, 28 Ago", "Qui, 29 Ago", "Sex, 30 Ago", "Sab, 31 Ago", "Dom, 01 Set"],
];

const CardShowTime: React.FC<CardDropDownProps> = ({ classname }) => {
  return (
    <div className={classname}>
      <CardSessionInfo language="DUBLADO" room="SALA 2" sessionType="3D" />
      <button
        className="bg-gray-700  min-h-[160px] 
     text-white font-bold text-sm flex justify-center pt-5 rounded-lg px-5
     mt-5"
      >
        Qui, 29 Ago, 19:30
      </button>
    </div>
  );
};

export default CardShowTime;
