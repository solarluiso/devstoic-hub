import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-4 md:py-10 sm:gap-10">
      <h1 className="text-5xl text-center sm:text-6xl md:text-7xl">
        Welcome to DevStoic Hub
      </h1>
      <p className="text-lg font-mono sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        A place for developers to cultivate productive habits.
      </p>
      <button className="px-6 py-3 mt-6 text-white bg-green-700 rounded-md shadow-lg hover:bg-green-800">
        Start Now
      </button>
    </div>
  );
}
