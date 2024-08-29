import React from "react";

interface CardSessionInfoProps {
  sessionType: string; // Ex: "2D", "3D"
  language: string; // Ex: "Original", "Dublado"
  room: number; // Ex: 1, 2, 3
}

const CardSessionInfo: React.FC<CardSessionInfoProps> = ({
  sessionType,
  language,
  room,
}) => {
  return (
    <div className="border p-4 rounded shadow-lg bg-white">
      <h3 className="text-lg font-semibold">Sessão</h3>
      <p>
        <strong>Tipo:</strong> {sessionType}
      </p>
      <p>
        <strong>Idioma:</strong> {language}
      </p>
      <p>
        <strong>Sala:</strong> {room}
      </p>
    </div>
  );
};

export default CardSessionInfo;
