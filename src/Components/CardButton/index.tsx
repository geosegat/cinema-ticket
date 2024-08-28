import React from "react";
import { IconLeft, IconRight } from "./../../assets/Icons";

interface CardButtonProps {
  right?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({
  right,
  onPressLeft,
  onPressRight,
}) => {
  const handleClick = () => {
    if (right && onPressRight) {
      onPressRight();
    } else if (!right && onPressLeft) {
      onPressLeft();
    }
  };

  return (
    <button
      className="p-2.5 bg-gray-800 bg-opacity-75 font-extrabold text-white rounded-xl"
      onClick={handleClick}
    >
      {right ? <IconRight /> : <IconLeft />}
    </button>
  );
};

export default CardButton;
