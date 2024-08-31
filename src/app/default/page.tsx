"use client";

import DefaultHeader from '@/components/DefaultHeader';
import DefaultQuestion from '@/components/DefaultQuestion';
import React, { useEffect, useState } from 'react';

const DefaultPage = () => {
  const [score, setScore] = useState<number>(0)
  const [passed, setPass] = useState<boolean>(false)

  const generateQuestion = () => { return Math.floor(Math.random() * 10) + 1; };

  useEffect(() => {
    setPass(score >= 2);
  }, [score]);

  const updateScore = (point: number) => {
    setScore(score + point)
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center`}
    >
      <DefaultHeader passed={passed} score={score} />

      <div className="flex flex-wrap gap-4 justify-center">
        <DefaultQuestion passed={passed} updateScore={updateScore} generateQuestion={generateQuestion} />
        <DefaultQuestion passed={passed} updateScore={updateScore} generateQuestion={generateQuestion} />
        <DefaultQuestion passed={passed} updateScore={updateScore} generateQuestion={generateQuestion} />
      </div>
    </div>
  );
};

export default DefaultPage;
