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
    <div className="flex justify-between border-b border-neutral-800 py-6">
      <h1 className="text-white font-bold">{label}</h1>
      <h1 className="text-neutral-500 font-bold">{value}</h1>
    </div>
  );
};

export default CardMovieInfoRow;
