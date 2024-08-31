"use client";

import useThemeStore from "@/lib/themeStore";

const ZustandButton = () => {
  const { toggleTheme } = useThemeStore()

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ZustandButton;
