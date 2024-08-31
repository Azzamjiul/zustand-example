"use client";

import React, { useState, useEffect } from 'react';

interface DefaultQuestionProps {
  generateQuestion: () => number
  updateScore: (point: number) => void
  passed: boolean
}

const DefaultQuestion: React.FC<DefaultQuestionProps> = ({generateQuestion, updateScore, passed }) => {
  const [question, setQuestion] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    const num1 = generateQuestion();
    const num2 = generateQuestion();
    setCorrectAnswer(num1 + num2);
    setQuestion(`What is ${num1} + ${num2}?`);
  }, []);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer, 10) === correctAnswer) {
      setFeedback('Correct!');
      updateScore(1)
    } else {
      setFeedback(`Incorrect.`);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8`}>
      <h1 className={`text-3xl font-bold mb-4 ${passed ? "text-green-600" : ""}`}>{question}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder="Your answer"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        {
          feedback == '' &&
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        }
      </form>
      {feedback && <p className={`mt-4 text-lg font-semibold ${feedback == "Correct!" ? "text-green-600" : "text-red-600"}`}>{feedback}</p>}
    </div>
  );
};

export default DefaultQuestion;
