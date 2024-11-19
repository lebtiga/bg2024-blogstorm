import React from 'react';
import { Trophy, Gift, Star, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MilestoneTrackerProps {
  currentFounders: number;
}

export const MilestoneTracker: React.FC<MilestoneTrackerProps> = ({ currentFounders }) => {
  const milestones = [
    {
      count: 25,
      title: "Early Adopter Prize Draw",
      prize: {
        name: "$500 Cash Prize Draw",
        value: "$500",
        image: "https://images.unsplash.com/photo-1593672755342-741a7f868732?auto=format&fit=crop&q=80&w=400&h=300",
        imageAlt: "$100 bills stack"
      },
      bonus: {
        name: "500 Bonus Credits for Everyone",
        value: "$150"
      },
      status: currentFounders >= 25 ? "Unlocked!" : `${25 - currentFounders} founders to go`
    },
    {
      count: 50,
      title: "Growth Prize Draw",
      prize: {
        name: "MacBook Air Prize Draw",
        value: "$999",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400&h=300",
        imageAlt: "MacBook Air on desk"
      },
      bonus: {
        name: "300 Bonus Credits for Everyone",
        value: "$90"
      },
      status: currentFounders >= 50 ? "Unlocked!" : `${50 - currentFounders} founders to go`
    },
    {
      count: 75,
      title: "Community Prize Draw",
      prize: {
        name: "Meta Quest 3 Prize Draw",
        value: "$499",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400&h=300",
        imageAlt: "VR headset"
      },
      bonus: {
        name: "200 Bonus Credits for Everyone",
        value: "$60"
      },
      status: currentFounders >= 75 ? "Unlocked!" : `${75 - currentFounders} founders to go`
    },
    {
      count: 100,
      title: "Grand Prize Draw",
      prize: {
        name: "iPhone 16 Pro Prize Draw",
        value: "$1,199",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400&h=300",
        imageAlt: "Latest iPhone Pro"
      },
      bonus: {
        name: "100 Bonus Credits for Everyone",
        value: "$30"
      },
      status: currentFounders >= 100 ? "Unlocked!" : `${100 - currentFounders} founders to go`
    }
  ];

  return (
    <div className="glass-card rounded-2xl p-8 mb-16 bg-black/40">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Trophy className="w-8 h-8 text-emerald-400" />
          <div>
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent px-1 py-0.5 rounded backdrop-blur-sm bg-black/40">
                Prize Draw Pool
              </span>
            </h2>
            <p className="text-white">Total Prize Pool Value: $3,000+ (One Winner Per Milestone)</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-emerald-400">{currentFounders}/100</div>
          <div className="text-sm text-white">Founders Joined</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 mb-12 bg-black/60 rounded-full overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentFounders / 100) * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${(milestone.count / 100) * 100}%` }}
          >
            <div 
              className={`w-4 h-4 -ml-2 rounded-full border-2 ${
                currentFounders >= milestone.count 
                  ? 'bg-emerald-400 border-emerald-400' 
                  : 'bg-gray-800 border-gray-600'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {milestones.map((milestone, index) => {
          const isUnlocked = currentFounders >= milestone.count;
          const isNext = !isUnlocked && currentFounders < milestone.count && 
            (index === 0 || currentFounders >= milestones[index - 1].count);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${
                isUnlocked ? 'order-first' : ''
              }`}
            >
              {/* Card */}
              <div className={`glass-card rounded-xl transition-all duration-300 ${
                isUnlocked ? 'border-emerald-500/50 bg-black/60' : 
                isNext ? 'border-purple-500/50 bg-black/60' : 
                'border-gray-800 bg-black/60'
              }`}>
                {/* Lock Badge */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center ${
                  isUnlocked ? 'bg-emerald-500' : 'bg-gray-800'
                }`}>
                  {isUnlocked ? (
                    <Star className="w-4 h-4 text-black" />
                  ) : (
                    <Lock className="w-4 h-4 text-gray-400" />
                  )}
                </div>

                {/* Header */}
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-bold text-white">{milestone.count} Founders</div>
                    <div className={`text-sm ${
                      isUnlocked ? 'text-emerald-400' :
                      isNext ? 'text-purple-400' :
                      'text-gray-300'
                    }`}>
                      {milestone.status}
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">{milestone.title}</div>
                </div>

                {/* Prize Content */}
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* Prize Image */}
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <img 
                        src={milestone.prize.image} 
                        alt={milestone.prize.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Prize Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-bold text-white">{milestone.prize.name}</div>
                          <div className="text-sm text-emerald-400">Value: {milestone.prize.value}</div>
                        </div>
                        <Gift className={`w-5 h-5 ${
                          isUnlocked ? 'text-emerald-400' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="text-sm text-gray-300">
                        + {milestone.bonus.name} ({milestone.bonus.value} value)
                      </div>
                      <div className="text-xs text-purple-400 mt-2 bg-purple-500/10 px-2 py-1 rounded-full inline-block">
                        One lucky founder will win the main prize!
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                  isUnlocked ? 'bg-emerald-500/10' : 
                  isNext ? 'bg-purple-500/10' : 
                  'bg-white/5'
                }`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};