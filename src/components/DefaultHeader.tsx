"use client";

import React from 'react';

interface DefaultHeaderProps {
  passed: boolean;
  score: number;
}

const DefaultHeader: React.FC<DefaultHeaderProps> = ({ passed, score }) => {
  return (
    <div className={`bg-white text-center mx-auto`}>
      {
        passed &&
        <h1 className="text-3xl text-green-600 font-bold mb-8">Passed</h1>
      }
      {
        !passed &&
        <h1 className="text-3xl text-red-600 font-bold mb-8">Not Passed</h1>
      }

      <div className='text-2xl'>Score: {score}</div>
    </div>
  );
};

export default DefaultHeader;
