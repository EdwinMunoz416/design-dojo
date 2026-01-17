import React from "react";

interface MeditationSectionProps {
  onStart: () => void;
}

export const MeditationSection: React.FC<MeditationSectionProps> = ({ onStart }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 dark:text-blue-300 mb-4 leading-tight">
        Find Your Calm
      </h1>
      <p className="mb-10 max-w-xl text-lg md:text-xl text-blue-700 dark:text-blue-400">
        Take a deep breath. Let's begin a meditation session to clear your mind
        and recharge your spirit.
      </p>
      <button
        onClick={onStart}
        className="px-12 py-4 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xl md:text-2xl font-semibold shadow-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Start meditation session"
      >
        Start Meditation
      </button>
      <small className="mt-6 text-sm text-blue-600 dark:text-blue-400">
        Recommended session: 10 minutes
      </small>
    </section>
  );
};
