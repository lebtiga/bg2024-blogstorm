import React from 'react';
import { Users, Star, Gift, Zap } from 'lucide-react';

interface SocialProofProps {
  viewersCount: number;
  lastClaimMinutes: number;
  currentFounders: number;
}

export const SocialProof: React.FC<SocialProofProps> = ({
  viewersCount,
  lastClaimMinutes,
  currentFounders
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      <div className="glass-card p-4 rounded-xl flex items-center gap-3">
        <Users className="w-5 h-5 text-emerald-400" />
        <div className="text-sm">
          <span className="text-emerald-400">{viewersCount}</span> people viewing this offer
        </div>
      </div>
      
      <div className="glass-card p-4 rounded-xl flex items-center gap-3">
        <Zap className="w-5 h-5 text-purple-400" />
        <div className="text-sm">
          Last speed bonus claimed {lastClaimMinutes} minutes ago
        </div>
      </div>
      
      <div className="glass-card p-4 rounded-xl flex items-center gap-3">
        <Star className="w-5 h-5 text-emerald-400" />
        <div className="text-sm">
          {currentFounders >= 25 ? "🎉 New milestone unlocked: 25 founders!" : "Next milestone: 25 founders"}
        </div>
      </div>
      
      <div className="glass-card p-4 rounded-xl flex items-center gap-3">
        <Gift className="w-5 h-5 text-purple-400" />
        <div className="text-sm">
          Only {25 - currentFounders} speed bonus spots remaining
        </div>
      </div>
    </div>
  );
};