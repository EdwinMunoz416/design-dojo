// 1. Imports
import React from "react";

// 2. Types/Interfaces
// No props or types needed for this simple component

// 3. Component
const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <h1 className="text-white text-3xl" tabIndex={0} aria-label="Goodbye World">
        Hello World
      </h1>
    </main>
  );
};

// 4. Export
export default Home;
