import React, { useState } from "react";
import { IconDown } from "../../assets/Icons";

const CardDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Hoje, 28 Ago");
  const dates = [
    "Hoje, 28 Ago",
    "Qui, 29 Ago",
    "Sex, 30 Ago",
    "Sab, 31 Ago",
    "Dom, 01 Set",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none"
        >
          {selectedDate}
          <IconDown />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-full rounded-lg shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="py-1">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => handleDateSelect(date)}
                className="block px-4 py-2 text-sm text-white w-full text-left hover:bg-gray-600"
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDropDown;
