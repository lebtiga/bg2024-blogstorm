import React from 'react';
import { StarCanvas } from './StarCanvas';
import { RocketAnimation } from './RocketAnimation';

export const LaunchBackground: React.FC = () => {
  return (
    <>
      <StarCanvas />
      <RocketAnimation />
      <div 
        className="fixed inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
    </>
  );
};