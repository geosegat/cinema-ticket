import React from "react";

interface MovieDetails {
  title?: string;
  image?: string;
}

interface CardSummaryProps {
  movie?: MovieDetails;
  date?: string;
  location?: string;
  time?: string;
  screen?: string;
  ticket?: string;
}

const CardSummaryTicket: React.FC<CardSummaryProps> = ({
  movie,
  date,
  location,
  time,
  screen,
  ticket,
}) => {
  return (
    <div className="p-4 text-white">
      <div className="mb-4">
        <img src={movie?.image} alt={movie?.title} className="w-20 h-28 mb-4" />
        <h2 className="text-xl">{movie?.title}</h2>
      </div>
      <div className="mb-2">Hoje, {date}</div>
      <div className="mb-2">Shopping {location}</div>
      <div className="mb-2">{time}</div>
      <div className="mb-2">Sala {screen}</div>
      <div className="mb-2">{ticket}</div>
    </div>
  );
};

export default CardSummaryTicket;
