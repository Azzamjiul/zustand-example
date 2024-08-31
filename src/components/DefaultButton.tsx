"use client";

import React from 'react';

interface DefaultButtonProps {
  updateState: () => void;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ updateState }) => {
  const handleClick = () => {
    updateState();
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default DefaultButton;
