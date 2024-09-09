import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FixedHeader from "../../Components/FixedHeader";
import CardSeat from "../../Components/CardSeat";
import CardSummaryTicket from "../../Components/CardSummayrTicket";

interface SeatType {
  id: number;
  isSelected: boolean;
  isUnavailable?: boolean;
}

const SelectShowTime: React.FC = () => {
  const navigate = useNavigate();
  const [seats, setSeats] = useState<SeatType[]>(
    Array.from({ length: 244 }, (_, i) => ({
      id: i + 1,
      isSelected: false,
      isUnavailable: [5, 10, 15].includes(i + 1),
    }))
  );

  const selectedSeatsCount = useMemo(
    () => seats.filter((seat) => seat.isSelected).length,
    [seats]
  );

  const handleSearchMovie = () => {
    navigate("/search-movie");
  };

  const handleSeatSelect = (seatId: number) => {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        seat.id === seatId ? { ...seat, isSelected: !seat.isSelected } : seat
      )
    );
  };

  const handleContinue = () => {
    alert(`Você selecionou ${selectedSeatsCount} assento(s).`);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <FixedHeader onClickSearchMovies={handleSearchMovie} />
      <main className="pt-24 w-full max-w-screen-lg mx-auto flex flex-row flex-1">
        <div className="flex flex-1 justify-center">
          <CardSummaryTicket />
        </div>
        <div className="flex flex-1">
          <CardSeat seats={seats} onSeatSelect={handleSeatSelect} />
        </div>
      </main>
      <div className="fixed bottom-0 bg-gray-800 p-4 w-full max-w-screen-lg mx-auto flex justify-between items-center">
        <span className="text-white">
          {selectedSeatsCount > 0
            ? `Assentos Selecionados: ${selectedSeatsCount}`
            : "ESCOLHA PARA CONTINUAR"}
        </span>
        <button
          onClick={handleContinue}
          disabled={selectedSeatsCount === 0}
          className={`py-2 px-4 rounded ${
            selectedSeatsCount > 0
              ? "bg-green-600 text-white"
              : "bg-gray-500 text-gray-300"
          }`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default SelectShowTime;
