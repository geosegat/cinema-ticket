import React from "react";
import { IconLeft, IconRight } from "./../assets/Icons/index";

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
      className="right-2 md:right-4 top-1/2 
      transform -translate-y-1/2 md:p-2.5 bg-gray-800
       bg-opacity-75 font-extrabold text-white 
       rounded-xl
       "
      onClick={handleClick}
    >
      {right ? <IconRight /> : <IconLeft />}
    </button>
  );
};

export default CardButton;
