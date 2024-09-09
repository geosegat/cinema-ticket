import React from "react";

interface CardMovieInfoRowProps {
  label?: string;
  value?: string;
}

const CardMovieInfoRow: React.FC<CardMovieInfoRowProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex border-b border-neutral-800 py-6 ">
      <div className="flex-1">
        <h1 className="text-white font-bold  ">{label}</h1>
      </div>
      <div className="flex-1 flex justify-end">
        <h1 className="text-neutral-500 font-bold   ">{value}</h1>
      </div>
    </div>
  );
};

export default CardMovieInfoRow;
