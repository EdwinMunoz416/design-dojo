import React from "react";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white min-h-screen flex flex-col justify-center px-6 md:px-20">
      {/* Dark glassmorphism overlay with a hint of neon glow */}
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-50 mix-blend-overlay pointer-events-none"></div>

      {/* Content container with z-index for clarity */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-sans drop-shadow-lg">
          Dave & Busters
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light uppercase tracking-wider drop-shadow-md">
          The Ultimate Night Out
        </p>
        <p className="max-w-xl mx-auto mb-10 text-gray-300 font-medium leading-relaxed">
          Food. Games. Drinks. Vibes. Your next epic night starts here.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#book"
            className="bg-indigo-600 hover:bg-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-300 rounded-md px-6 py-3 font-semibold text-white text-lg transition-colors"
          >
            Book Your Spot
          </a>
          <a
            href="#events"
            className="border border-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md px-6 py-3 font-semibold text-indigo-400 text-lg transition-colors"
          >
            See Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
