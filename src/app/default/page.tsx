"use client";

import DefaultButton from '@/components/DefaultButton';
import DefaultHeader from '@/components/DefaultHeader';
import React, { useState } from 'react';

const DefaultPage = () => {
  const [theme, setTheme] = useState<string>("light")

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme == "light") ? "dark" : "light")
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center`}
    >
      <DefaultHeader theme={theme} />

      <DefaultButton updateState={toggleTheme}/>
    </div>
  );
};

export default DefaultPage;
