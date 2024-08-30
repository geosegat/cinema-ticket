import React from "react";

interface CardSeatProps {
  seatNumber?: number;
  isOccupied?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}

const CardSeat: React.FC<CardSeatProps> = ({
  seatNumber,
  isOccupied,
  isSelected,
  onSelect,
}) => {
  const seatStyle = `
    w-8 h-8 m-1 flex items-center justify-center rounded
    ${
      isOccupied
        ? "bg-gray-600 cursor-not-allowed"
        : isSelected
        ? "bg-red-500 cursor-pointer"
        : "bg-white cursor-pointer"
    }
  `;

  return (
    <div className={seatStyle} onClick={!isOccupied ? onSelect : undefined}>
      {isSelected ? "😄" : ""}
    </div>
  );
};

export default CardSeat;
