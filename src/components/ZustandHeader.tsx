"use client";

import useThemeStore from "@/lib/themeStore";

const ZustandHeader = () => {
  const { theme } = useThemeStore();

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <h1 className="text-3xl font-bold mb-8">Zustand Page</h1>
    </div>
  );
};

export default ZustandHeader;
