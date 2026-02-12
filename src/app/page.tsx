import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-pulse">
          Proxima0110
        </h1>
        <p className="text-sm text-gray-400 font-[family-name:var(--font-geist-mono)]">
          Developer & Creator
        </p>

        <div className="mt-8 p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
          <code className="text-xs text-gray-300">
            contact: proxima0110@gmail.com
          </code>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Proxima0110. All rights reserved.</p>
      </footer>
    </div>
  );
}
