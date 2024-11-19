import React, { useState } from 'react';
import { Trophy, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MILESTONES = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Traffic Growth",
    scenarios: [
      "Your website traffic increases by 312% in the first 3 months",
      "You start ranking for 50+ new keywords in just weeks",
      "Your bounce rate drops by 45% due to engaging AI content"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Audience Growth",
    scenarios: [
      "Your email list grows by 200+ subscribers monthly",
      "Social shares increase by 400% with viral AI content",
      "You build a loyal community around your expert content"
    ]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market Impact",
    scenarios: [
      "You become the go-to authority in your niche",
      "Competitors start following your content strategy",
      "Industry leaders reach out for collaborations"
    ]
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Business Success",
    scenarios: [
      "Your conversion rate doubles with targeted content",
      "You save 15+ hours weekly on content creation",
      "Your ROI increases by 280% with automated blogs"
    ]
  }
];

export const SuccessVision: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenarios, setSelectedScenarios] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleScenarioSelect = (scenario: string) => {
    if (currentStep < MILESTONES.length - 1) {
      setSelectedScenarios([...selectedScenarios, scenario]);
      setCurrentStep(prev => prev + 1);
    } else {
      setSelectedScenarios([...selectedScenarios, scenario]);
      setIsComplete(true);
    }
  };

  return (
    <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
          Visualize Your Success
        </h3>
        <p className="text-gray-400 text-sm">
          Let's create your personalized success roadmap with BlogStorm.ai
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isComplete ? (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex justify-between mb-6">
              {MILESTONES.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-2 ${
                    index === currentStep ? 'text-emerald-400' : 'text-gray-500'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === currentStep ? 'bg-emerald-400/20' : 'bg-gray-800'
                  }`}>
                    {milestone.icon}
                  </div>
                  <div className="text-xs font-medium">{milestone.title}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">
                {MILESTONES[currentStep].title}
              </h4>
              {MILESTONES[currentStep].scenarios.map((scenario, index) => (
                <motion.button
                  key={index}
                  className="w-full p-4 rounded-xl bg-black/50 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 text-left flex items-center justify-between group"
                  onClick={() => handleScenarioSelect(scenario)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{scenario}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold mb-2">Your Success Story Awaits</h4>
              <p className="text-gray-400 text-sm mb-6">
                Here's your personalized path to success with BlogStorm.ai
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left">
              {selectedScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Trophy className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-white">{scenario}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-black font-bold transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Success Story Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};