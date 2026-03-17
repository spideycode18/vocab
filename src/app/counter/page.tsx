'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <div className="rounded-3xl bg-blue-700 p-10 pb-5 text-white">
          <div className="rounded-full border-2 p-2 text-center text-5xl">
            {count}
          </div>

          <div className="mt-2 flex w-full justify-between gap-2">
            <button
              type="button"
              className="cursor-pointer rounded bg-gray-400 px-2 py-1"
              onClick={handleIncrease}
            >
              Add
            </button>
            <button
              type="button"
              className="cursor-pointer rounded bg-gray-400 px-2 py-1"
              onClick={handleDecrease}
            >
              Plus
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
