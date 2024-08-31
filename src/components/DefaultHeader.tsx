"use client";

import React from 'react';

interface DefaultHeaderProps {
  theme: string;
}

const DefaultHeader: React.FC<DefaultHeaderProps> = ({ theme }) => {
  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-3xl font-bold mb-8">Default Page</h1>
    </div>
  );
};

export default DefaultHeader;
