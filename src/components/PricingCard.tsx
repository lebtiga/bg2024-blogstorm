import React from 'react';
import { Check, Sparkles, Gift, Rocket, Users, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  currentFounders: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ currentFounders }) => {
  const features = [
    {
      title: "Lifetime Access to All Features",
      description: "Never pay again, get all future updates"
    },
    {
      title: "Monthly Coaching Sessions",
      description: "1-on-1 sessions with our expert team"
    },
    {
      title: "Priority VIP Support",
      description: "Get help within 24 hours, guaranteed"
    },
    {
      title: "Private Founders Slack",
      description: "Network with other successful founders"
    },
    {
      title: "Early Access to Features",
      description: "Be the first to try new capabilities"
    },
    {
      title: "Quarterly Roadmap Voting",
      description: "Help shape the product's future"
    },
    {
      title: "1000 Credits/Month",
      description: "$3480/year value, unlimited rollover"
    },
    {
      title: "Your Own API Keys",
      description: "Full control over your integration"
    }
  ];

  const speedBonuses = [
    { range: "First 10", credits: 1000, value: 300 },
    { range: "11-25", credits: 500, value: 150 },
    { range: "26-50", credits: 250, value: 75 }
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Popular Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-purple-600 to-pink-400 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
            <Sparkles className="w-4 h-4" />
            LIMITED TIME OFFER - 100 FOUNDERS ONLY
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        <div className="glass-card rounded-3xl border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden bg-black/40">
          {/* Gradient Orbs */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Features */}
            <div>
              <div className="text-center md:text-left mb-8">
                <h3 className="text-3xl font-bold mb-2 text-white">Founder's Lifetime Access</h3>
                <p className="text-gray-300">Join our exclusive founding members club</p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{feature.title}</div>
                      <div className="text-sm text-gray-300">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Pricing & Stats */}
            <div className="flex flex-col">
              {/* Price Box */}
              <div className="glass-card rounded-2xl p-6 mb-6 text-center bg-black/60 border border-emerald-500/30">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-5xl font-bold text-white">$500</div>
                  <div className="text-left">
                    <div className="text-lg text-gray-400 line-through">$3,480/year</div>
                    <div className="text-lg text-emerald-400 font-medium">Save 85%</div>
                  </div>
                </div>
                <div className="text-gray-300 mb-6">One-time payment, lifetime access!</div>
                <button className="w-full py-4 px-8 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <Rocket className="w-5 h-5" />
                  Launch with Us Now
                  <Rocket className="w-5 h-5" />
                </button>
              </div>

              {/* Speed Bonuses */}
              <div className="glass-card rounded-2xl p-6 mb-6 bg-black/60 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <h4 className="font-bold text-white">Speed Bonuses</h4>
                </div>
                <div className="space-y-3">
                  {speedBonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Gift className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-gray-300">{bonus.range} Founders:</span>
                      </div>
                      <span className="text-purple-400">
                        {bonus.credits} credits (${bonus.value} value)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 glass-card rounded-xl bg-black/60 border border-emerald-500/20">
                  <Users className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{currentFounders}/100</div>
                  <div className="text-sm text-gray-300">Founders</div>
                </div>
                <div className="text-center p-4 glass-card rounded-xl bg-black/60 border border-purple-500/20">
                  <Gift className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">$3,000+</div>
                  <div className="text-sm text-gray-300">Prize Pool</div>
                </div>
                <div className="text-center p-4 glass-card rounded-xl bg-black/60 border border-emerald-500/20">
                  <Star className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-gray-300">Milestones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};