'use client';

import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-100 via-blue-100 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Hero />
    </main>
  );
}
