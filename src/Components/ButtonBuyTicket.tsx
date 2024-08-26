import React from "react";
import { IconRight } from "./../assets/Icons/index";

function ButtonBuyTicket() {
  return (
    <button className=" bg-white text-black font-bold p-5 rounded-xl flex flex-row items-center ">
      COMPRAR INGRESSO
      <IconRight className="ml-1 " />
    </button>
  );
}

export default ButtonBuyTicket;
