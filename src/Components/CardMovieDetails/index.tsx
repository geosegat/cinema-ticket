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
    <div className="flex-1 max-w-lg max-h-full p-4">
      <div className="w-56 h-56 bg-yellow-600 rounded-lg"></div>
      <img className="rounded-lg shadow-lg" />
      <h1 className="text-white">18 Terror</h1>
      <h1 className="text-white"></h1>
      <div>
        <h1 className="text-neutral-500 font-semibold">
          A agente do FBI Lee Harker (Maika Monroe) é designada para um caso
          envolvendo um serial killer impiedoso que se autointitula LONGLEGS
          (Nicolas Cage). O assassino costuma deixar pistas com símbolos nas
          cenas do crime que apenas a agente é capaz de decifrar. A investigação
          toma rumos inesperados, enquanto Harker descobre uma conexão macabra
          com o assassino. Classificação indicativa 18 Anos. Contém drogas
          lícitas, medo, violência extrema.
        </h1>
        <CardMovieInfoRow label="Data de estreia" value="29.08.2024" />
        <CardMovieInfoRow label="Distribuído por" value="Diamond Filmes" />
        <CardMovieInfoRow
          label="Acessibilidade"
          value="Acessibilidade compatível com Movie Reading para pessoas com deficiência visual ou auditiva. Mais informações acesse www.cinemark.com.br/acessibilidade. O cinema não disponibiliza Wi-Fi e nem aparelho celular para este app."
        />
        <p className="text-white text-xl font-bold mt-6 ">Elenco e Equipe</p>
        <CardMovieInfoRow label="Diretor" value="Oz Perkins" />
        <CardMovieInfoRow
          label="Elenco"
          value="Nicolas Cage Alicia Witt Maika Monroe Blair Underwood"
        />
      </div>
    </div>
  );
};

export default CardMovieDetails;
