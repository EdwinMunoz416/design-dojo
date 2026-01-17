import React, { useEffect, useState } from 'react';

export default function KineticTypography() {
  const words = ['Focus.', 'Simplify.', 'Achieve.'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      aria-hidden="true"
      className="absolute select-none text-5xl md:text-7xl font-bold text-gray-300 dark:text-gray-600 opacity-30 dark:opacity-40 whitespace-nowrap"
      style={{
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {words[index]}
    </span>
  );
}
