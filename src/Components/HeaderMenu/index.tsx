import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-row items-center space-x-6  ">
      <button onClick={handleHome} className="text-white font-semibold">
        CINETICKET'
      </button>
      <div className="space-x-1">
        <button className="text-white font-bold text-xs">PROGRAMAÇÃO</button>
        <button className="text-white font-bold text-xs">SNACKBAR</button>
        <button className="text-white font-bold text-xs">CINEMARK CLUB</button>
        <button className="text-white font-bold text-xs">PARA EMPRESAS</button>
        <button className="text-white font-bold text-xs">PARCERIAS</button>
        <button className="text-white font-bold text-xs">SUA SESSÃO</button>
      </div>
    </div>
  );
}

export default HeaderMenu;
