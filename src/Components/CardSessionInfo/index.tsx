import React from "react";

interface CardSessionInfoProps {
  sessionType: string;
  language: string;
  room: string;
  classname?: string;
}

const CardSessionInfo: React.FC<CardSessionInfoProps> = ({
  sessionType,
  language,
  room,
  classname,
}) => {
  return (
    <div
      className={`text-neutral-500 text-sm font-semibold  flex items-center space-x-1 ${classname}`}
    >
      <p>{sessionType} -</p>
      <p>{language} -</p>
      <p>{room}</p>
    </div>
  );
};

export default CardSessionInfo;
