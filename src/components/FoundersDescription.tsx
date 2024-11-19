import React from 'react';
import { Star, Rocket, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const FoundersDescription: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-16 relative overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative text-center space-y-6">
        <div className="flex justify-center gap-3">
          <Lock className="w-6 h-6 text-emerald-400" />
          <Star className="w-6 h-6 text-purple-400" />
          <Rocket className="w-6 h-6 text-emerald-400" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
          Join the Founding 100
        </h2>
        
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          This isn't just another tool purchase – it's your invitation to join an exclusive circle of visionary founders who are reshaping the future of content creation.
        </p>
        
        <div className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
          We're looking for 100 ambitious founders who understand that great content is the cornerstone of business growth. As a founding member, you're not just getting lifetime access – you're securing your place in a movement that's revolutionizing how businesses connect with their audience.
        </div>
        
        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-gray-400">Limited to 100 Founders</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-400">Lifetime Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-400" />
            <span className="text-sm text-gray-400">Exclusive Benefits</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};