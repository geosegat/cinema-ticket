import React from "react";
import { IconRight } from "../../assets/Icons";

interface ButtonBuyTicketProps {
  onClickBuyTicket?: () => void;
}

const ButtonBuyTicket: React.FC<ButtonBuyTicketProps> = ({
  onClickBuyTicket,
}) => {
  return (
    <button
      onClick={onClickBuyTicket}
      className=" bg-white text-black font-bold p-5 rounded-xl flex flex-row items-center "
    >
      COMPRAR INGRESSO
      <IconRight className="ml-1 " />
    </button>
  );
};

export default ButtonBuyTicket;
