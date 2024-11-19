import React from 'react';
import { motion } from 'framer-motion';

export const ParticleTrail: React.FC = () => {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-1/2"
          initial={{
            scale: 1,
            opacity: 0.8,
            y: 0,
          }}
          animate={{
            scale: 0,
            opacity: 0,
            y: -100, // Changed to negative to move upward
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-4 h-4 -translate-x-1/2 rounded-full"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(74, 222, 128, 0.8) 0%,
                rgba(74, 222, 128, 0.4) 40%,
                rgba(74, 222, 128, 0) 80%
              )`,
              boxShadow: '0 0 20px rgba(74, 222, 128, 0.4)',
            }}
          />
        </motion.div>
      ))}
      
      {/* Main thruster glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-16 rotate-180"
        style={{
          background: `radial-gradient(ellipse at bottom, 
            rgba(74, 222, 128, 0.8) 0%,
            rgba(74, 222, 128, 0.4) 40%,
            rgba(74, 222, 128, 0) 80%
          )`,
          filter: 'blur(4px)',
        }}
      />
    </div>
  );
};