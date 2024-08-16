import React from "react";

function HeaderMenu() {
  console.log("oi");
  return (
    <div className="flex flex-row justify-center space-x-6 p-4 items-center">
      <h1
        onClick={() => {
          console.log("oi fui clicado");
        }}
        className="text-white font-bold"
      >
        CINETICKET
      </h1>
      <h2 className="text-white font-bold ">PROGRAMAÇÃO</h2>
      <h2 className="text-white font-bold">SNACKBAR</h2>
      <h2 className="text-white font-bold">CINETICKET CLUB</h2>
      <h2 className="text-white font-bold">PARA EMPRESAS</h2>
      <h2 className="text-white font-bold">PARCERIAS</h2>
      <h2 className="text-white font-bold">SUA SESSÃO</h2>
    </div>
  );
}

export default HeaderMenu;
