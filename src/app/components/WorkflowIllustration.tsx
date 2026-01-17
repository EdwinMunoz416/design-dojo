import React from 'react';

export default function WorkflowIllustration() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 80"
      fill="none"
      aria-hidden="true"
      className="w-full max-w-xs md:max-w-md mx-auto"
    >
      <rect x="5" y="10" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <text x="20" y="23" textAnchor="middle" fontSize="10" fill="currentColor" className="select-none">
        Calendar
      </text>
      <rect x="45" y="10" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="23" textAnchor="middle" fontSize="10" fill="currentColor" className="select-none">
        Tasks
      </text>
      <rect x="85" y="10" width="30" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <text x="100" y="23" textAnchor="middle" fontSize="10" fill="currentColor" className="select-none">
        Progress
      </text>

      <path d="M35 20h10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M75 20h10" stroke="currentColor" strokeWidth="1.5" />

      <rect x="38" y="40" width="44" height="10" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="38" y="40" width="22" height="10" rx="5" fill="currentColor" className="text-blue-600 dark:text-blue-400" />
    </svg>
  );
}
