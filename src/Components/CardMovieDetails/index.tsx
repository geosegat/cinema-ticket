import React from "react";
import CardMovieInfoRow from "../CardMovieInfoRow";

const dadosMock = {
  dataDeEstreia: "29.08.2024",
  distribuidoPor: "Diamond Filmes",
  acessibilidade: "todas",
  elencoEquipe: {
    diretor: "Oz Perkins",
    elenco: "Nicolas Cage, Ailicia Witt, Maika Monroe, Blair Underwood",
  },
};

const CardMovieDetails = () => {
  return (
    <div className="max-w-lg max-h-full ">
      <div className="w-56 h-56 bg-yellow-600"></div>
      <img className="rounded-lg shadow-lg" />
      <h1 className="text-white">18 Terror</h1>
      <h1 className="text-white"></h1>
      <div className="">
        <CardMovieInfoRow
          value=" Aagente do FBI Lee Harker (Maika Monroe) é designada para um caso
        envolvendo um serial killer impiedoso que se autointitula LONGLEGS
        (Nicolas Cage). O assassino costuma deixar pistas com símbolos nas cenas
        do crime que apenas a agente é capaz de decifrar. A investigação toma
        rumos inesperados, enquanto Harker descobre uma conexão macabra com o
        assassino. Classificação indicativa 18 Anos. Contém drogas lícitas,
        medo, violência extrema."
        />

        <CardMovieInfoRow label="Diretor" value="Tomar no cu" />
        <CardMovieInfoRow label="Data" value="20.05.1995" />
        <CardMovieInfoRow label="Diretor" value="Tomar no cu" />
      </div>
      <p className="text-white text-xl font-bold">Elenco e Equipe</p>
    </div>
  );
};

export default CardMovieDetails;
