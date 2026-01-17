import React from "react";
import { MeditationSection } from "./components/MeditationSection";

export default function Page() {
  const handleStart = () => {
    alert("Meditation started!");
  };

  return <MeditationSection onStart={handleStart} />;
}
