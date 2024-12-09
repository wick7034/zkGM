import React from 'react';
import { Lock } from 'lucide-react';

export function Tokenomics() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">Tokenomics</h2>
          <p className="text-gray-300 text-xl">Simple. Fair. Confusing.</p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="bg-gray-800 p-12 rounded-xl text-center transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <Lock className="w-16 h-16 text-purple-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-4">100%</h3>
            <p className="text-xl text-purple-300 mb-2">Locked Liquidity</p>
            <p className="text-gray-400">
              Because we believe in maximum confusion with maximum security
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm text-center mt-12">
          No team allocation. No presale. No understanding needed. Just vibes and locked liquidity.
        </p>
      </div>
    </div>
  );
}