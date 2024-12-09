import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-purple-400">zkGM</span>
            <p className="mt-2 text-sm">Embracing confusion since 2024</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>⚠️ This is a memecoin. Don't invest your life savings (or do, we're not financial advisors)</p>
          <p className="mt-2">© 2024 zkGM. All rights reserved (we think, we're not lawyers either)</p>
        </div>
      </div>
    </footer>
  );
}