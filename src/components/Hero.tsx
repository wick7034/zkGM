import React from 'react';
import { Brain, Rocket, Lock, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              zkGM
            </span>
          </h1>
          <p className="text-2xl font-bold mb-8 text-purple-300">
            The First Memecoin for People Who Don't Understand ZK But Are Bullish Anyway
          </p>
          <p className="text-xl mb-12 text-gray-300">
            Zero Knowledge of Zero Knowledge? No Problem! 🚀
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:opacity-90 transition">
              Buy $zkGM
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 rounded-full font-bold hover:bg-purple-500/10 transition">
              Join Cult
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}