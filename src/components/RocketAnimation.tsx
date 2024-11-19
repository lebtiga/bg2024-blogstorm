import React from 'react';
import { Rocket } from 'lucide-react';

export const RocketAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-full animate-rocket"
          style={{
            animationDelay: `${i * 4}s`,
            left: `${25 + i * 25}%`,
          }}
        >
          <div className="relative">
            <Rocket 
              className="w-12 h-12 text-emerald-500 transform"
              style={{
                filter: 'drop-shadow(0 0 15px rgba(74, 222, 128, 0.5))',
              }}
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 rocket-trail" />
          </div>
        </div>
      ))}
    </div>
  );
};