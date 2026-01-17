import React from 'react';

export default function Illustration() {
  return (
    <svg
      role="img"
      aria-label="Illustration of workflow with calendar, checklist, and progress bar"
      viewBox="0 0 240 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-md mx-auto"
    >
      {/* Calendar */}
      <rect x="10" y="10" width="70" height="60" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="10" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
      <circle cx="25" cy="20" r="4" fill="currentColor" />
      <circle cx="50" cy="20" r="4" fill="currentColor" />

      {/* Checklist */}
      <rect x="90" y="10" width="60" height="60" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="100" y1="25" x2="140" y2="25" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="40" x2="140" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="55" x2="120" y2="55" stroke="currentColor" strokeWidth="2" />
      <polyline points="125,55 130,60 140,50" stroke="currentColor" strokeWidth="2" fill="none" />

      {/* Progress Bar */}
      <rect x="160" y="30" width="60" height="20" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="160" y="30" width="30" height="20" rx="8" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}
