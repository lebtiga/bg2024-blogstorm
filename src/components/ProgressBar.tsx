import React from 'react';
import { Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentFounders: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentFounders }) => {
  const progress = (currentFounders / 100) * 100;

  return (
    <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-emerald-400" />
          <h3 className="text-xl font-semibold text-white">Founders Progress</h3>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-emerald-400" />
          <span className="text-lg font-bold text-white">{currentFounders}/100</span>
        </div>
      </div>
      
      <div className="relative h-4 bg-black/40 rounded-full overflow-hidden mb-2">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      
      <div className="text-sm text-gray-400 text-center">
        Join the exclusive founding members and shape the future of content creation
      </div>
    </div>
  );
};