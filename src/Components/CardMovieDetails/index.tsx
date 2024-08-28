import React from "react";

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
    <div className="bg-pink-800">
      <div className="w-56 h-56 bg-yellow-600"></div>
      <img className="rounded-lg shadow-lg" />
      <h1 className="text-white">18 Terror</h1>
      <h1 className="text-white">
        Aagente do FBI Lee Harker (Maika Monroe) é designada para um caso
        envolvendo um serial killer impiedoso que se autointitula LONGLEGS
        (Nicolas Cage). O assassino costuma deixar pistas com símbolos nas cenas
        do crime que apenas a agente é capaz de decifrar. A investigação toma
        rumos inesperados, enquanto Harker descobre uma conexão macabra com o
        assassino. Classificação indicativa 18 Anos. Contém drogas lícitas,
        medo, violência extrema.
      </h1>
      <h1 className="text-white">Data de estreia: {dadosMock.dataDeEstreia}</h1>
      <h1 className="text-white">
        Distribuido por: {dadosMock.distribuidoPor}
      </h1>
      <h1 className="text-white">Acessibilidade: {dadosMock.acessibilidade}</h1>
      <p className="text-white text-xl font-bold">Elenco e Equipe</p>
      <h1 className="text-white">Diretor: {dadosMock.elencoEquipe.diretor}</h1>
      <h1 className="text-white">Elenco: {dadosMock.elencoEquipe.elenco}</h1>
    </div>
  );
};

export default CardMovieDetails;
