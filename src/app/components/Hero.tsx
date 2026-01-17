import React from 'react';
import KineticTypography from './KineticTypography';
import WorkflowIllustration from './WorkflowIllustration';

export default function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative w-full max-w-7xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8"
    >
      <div className="relative flex-1">
        <KineticTypography />
        <h1 className="relative text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Own Your Day, One Task at a Time
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-md">
          Focus smart. Move fast. Get more done.
        </p>
        <button
          type="button"
          className="mt-8 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white text-lg font-semibold rounded-md shadow-md hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700 transition-transform"
          aria-label="Start free trial"
        >
          Start Free Trial
        </button>
      </div>
      <div className="flex-1 w-full max-w-md">
        <WorkflowIllustration />
      </div>
    </section>
  );
}
