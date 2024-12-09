import React from 'react';
import { Brain, Lock, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    title: "Don't Know ZK? Perfect!",
    description: "Join thousands of others who are bullish on zero knowledge proofs without knowing what they are.",
    icon: Brain
  },
  {
    title: "Community of Confused Bulls",
    description: "Unite with fellow enthusiasts who can't explain ZK but know it's the future.",
    icon: Users
  },
  {
    title: "Proof of Confusion",
    description: "Our revolutionary consensus mechanism: the less you understand, the more bullish you become.",
    icon: Lock
  },
  {
    title: "Number Go Up Technology",
    description: "Powered by pure speculation and unmatched confidence in things we don't understand.",
    icon: TrendingUp
  }
];

export function Features() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-purple-400 mb-4">Why zkGM?</h2>
          <p className="text-gray-300 text-xl">Because understanding is overrated</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition">
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}