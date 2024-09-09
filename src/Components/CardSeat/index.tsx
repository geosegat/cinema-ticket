import React from "react";

interface SeatType {
  id: number;
  isSelected?: boolean;
  isUnavailable?: boolean;
}

interface CardSeatProps {
  seats: SeatType[];
  onSeatSelect: (id: number) => void;
}

const CardSeat: React.FC<CardSeatProps> = ({ seats, onSeatSelect }) => {
  return (
    <div className="flex-1">
      <div className="flex flex-wrap gap-1 justify-center">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={`h-6 w-6 flex items-center justify-center rounded-sm ${
              seat.isUnavailable
                ? "bg-gray-600 cursor-not-allowed"
                : seat.isSelected
                ? "bg-red-600"
                : "bg-white"
            }`}
            onClick={() => !seat.isUnavailable && onSeatSelect(seat.id)}
            disabled={seat.isUnavailable}
          >
            <span
              className={`text-xs font-semibold ${
                seat.isUnavailable
                  ? "text-white"
                  : seat.isSelected
                  ? "text-white"
                  : "text-black"
              }`}
            >
              {seat.isUnavailable ? "X" : seat.id}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center min-h-[120px] mt-4">
        <h1 className="text-white font-semibold text-center mb-4 text-sm">
          Tela
        </h1>
        <img
          src="https://i.imgur.com/EXwBmG6.png"
          alt="Descrição da imagem"
          className="w-max h-[25px]"
        />
      </div>
    </div>
  );
};

export default CardSeat;
