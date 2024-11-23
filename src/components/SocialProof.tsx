import React from 'react';
import { Users, Star, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRandomViewers } from '../hooks/useRandomViewers';

interface SocialProofProps {
  currentFounders: number;
}

export const SocialProof: React.FC<SocialProofProps> = ({
  currentFounders
}) => {
  const viewerCount = useRandomViewers(3, 15, 15000);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
      <div className="glass-card p-4 rounded-xl flex items-center gap-3 bg-black/60">
        <Users className="w-5 h-5 text-emerald-400" />
        <div className="text-sm flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={viewerCount}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-emerald-400"
            >
              {viewerCount}
            </motion.span>
          </AnimatePresence>
          <span className="text-white">viewing</span>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-400">LIVE</span>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-4 rounded-xl flex items-center gap-3 bg-black/60">
        <Star className="w-5 h-5 text-emerald-400" />
        <div className="text-sm text-white">
          Next milestone: 25 founders
        </div>
      </div>
      
      <div className="glass-card p-4 rounded-xl flex items-center gap-3 bg-black/60">
        <Gift className="w-5 h-5 text-purple-400" />
        <div className="text-sm text-white">
          Only {25 - currentFounders} speed bonus spots remaining
        </div>
      </div>
    </div>
  );
};