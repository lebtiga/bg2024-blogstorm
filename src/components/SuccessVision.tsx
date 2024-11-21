import React, { useState } from 'react';
import { Trophy, TrendingUp, Users, Globe, ArrowRight, Gamepad, Star, Rocket, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MILESTONES = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Traffic Growth",
    question: "What's your biggest traffic goal?",
    color: "emerald",
    scenarios: [
      {
        icon: <Rocket />,
        title: "Rapid Growth Specialist",
        description: "Your website traffic increases by 312% in the first 3 months",
        impact: "Perfect for new websites looking for explosive growth",
        benefits: [
          "Rapid indexing of new content",
          "Quick ranking improvements",
          "High-volume keyword targeting"
        ]
      },
      {
        icon: <Target />,
        title: "Keyword Dominator",
        description: "You start ranking for 50+ new keywords in just weeks",
        impact: "Ideal for established sites seeking broader reach",
        benefits: [
          "Long-tail keyword optimization",
          "Featured snippet targeting",
          "Topic cluster development"
        ]
      },
      {
        icon: <Users />,
        title: "Engagement Master",
        description: "Your bounce rate drops by 45% due to engaging AI content",
        impact: "Great for sites with traffic but low engagement",
        benefits: [
          "Increased time on page",
          "Lower bounce rates",
          "Higher user satisfaction"
        ]
      }
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Audience Growth",
    question: "How do you want to grow your audience?",
    color: "purple",
    scenarios: [
      {
        icon: <Star />,
        title: "Email List Builder",
        description: "Your email list grows by 200+ subscribers monthly",
        impact: "Perfect for building a loyal subscriber base",
        benefits: [
          "Lead magnet creation",
          "Newsletter optimization",
          "Subscriber engagement"
        ]
      },
      {
        icon: <Zap />,
        title: "Social Media Amplifier",
        description: "Social shares increase by 400% with viral AI content",
        impact: "Ideal for brands seeking social media growth",
        benefits: [
          "Viral content creation",
          "Social media optimization",
          "Cross-platform reach"
        ]
      },
      {
        icon: <Users />,
        title: "Community Creator",
        description: "You build a loyal community around your expert content",
        impact: "Great for establishing thought leadership",
        benefits: [
          "Community engagement",
          "Expert positioning",
          "Member retention"
        ]
      }
    ]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market Impact",
    question: "What kind of market presence do you want?",
    color: "blue",
    scenarios: [
      {
        icon: <Trophy />,
        title: "Industry Authority",
        description: "You become the go-to authority in your niche",
        impact: "Perfect for establishing market leadership",
        benefits: [
          "Thought leadership content",
          "Industry recognition",
          "Expert positioning"
        ]
      },
      {
        icon: <Rocket />,
        title: "Trendsetter",
        description: "Competitors start following your content strategy",
        impact: "Ideal for innovative brands",
        benefits: [
          "Innovative content formats",
          "Market differentiation",
          "Brand leadership"
        ]
      },
      {
        icon: <Users />,
        title: "Network Builder",
        description: "Industry leaders reach out for collaborations",
        impact: "Great for expanding business relationships",
        benefits: [
          "Partnership opportunities",
          "Industry connections",
          "Collaboration growth"
        ]
      }
    ]
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Business Success",
    question: "What's your primary business objective?",
    color: "amber",
    scenarios: [
      {
        icon: <Target />,
        title: "Conversion Champion",
        description: "Your conversion rate doubles with targeted content",
        impact: "Perfect for revenue-focused businesses",
        benefits: [
          "Higher conversion rates",
          "Improved ROI",
          "Revenue growth"
        ]
      },
      {
        icon: <Zap />,
        title: "Efficiency Expert",
        description: "You save 15+ hours weekly on content creation",
        impact: "Ideal for time-constrained teams",
        benefits: [
          "Automated workflows",
          "Time savings",
          "Resource optimization"
        ]
      },
      {
        icon: <Rocket />,
        title: "ROI Maximizer",
        description: "Your ROI increases by 280% with automated blogs",
        impact: "Great for maximizing marketing budget",
        benefits: [
          "Cost reduction",
          "Profit maximization",
          "Budget optimization"
        ]
      }
    ]
  }
];

const colorVariants = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    hover: "hover:border-emerald-500/50 hover:bg-emerald-500/20"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:border-purple-500/50 hover:bg-purple-500/20"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:border-blue-500/50 hover:bg-blue-500/20"
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    hover: "hover:border-amber-500/50 hover:bg-amber-500/20"
  }
};

export const SuccessVision: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedScenarios, setSelectedScenarios] = useState<Array<{
    title: string;
    description: string;
    benefits: string[];
  }>>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleScenarioSelect = (scenario: any) => {
    if (currentStep < MILESTONES.length - 1) {
      setSelectedScenarios([...selectedScenarios, scenario]);
      setCurrentStep(prev => prev + 1);
    } else {
      setSelectedScenarios([...selectedScenarios, scenario]);
      setIsComplete(true);
    }
  };

  const currentColor = colorVariants[MILESTONES[currentStep].color as keyof typeof colorVariants];

  return (
    <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-12 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gamepad className="w-6 h-6 text-emerald-400" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Design Your Success Story
            </h3>
          </div>
          <p className="text-gray-400 text-sm">
            Let's create your personalized roadmap to success! Choose your path at each milestone.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              {/* Progress Indicators */}
              <div className="flex justify-between mb-8">
                {MILESTONES.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center gap-2 ${
                      index === currentStep ? currentColor.text : 
                      index < currentStep ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      index === currentStep ? `${currentColor.bg} ${currentColor.border}` : 
                      index < currentStep ? 'bg-gray-800 border-gray-700' : 'bg-gray-900 border-gray-800'
                    } border transition-all duration-300`}>
                      {milestone.icon}
                    </div>
                    <div className="text-xs font-medium text-center hidden md:block">
                      {milestone.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Question Section */}
              <div className="mb-8 text-center">
                <motion.h4
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-semibold text-white mb-2"
                >
                  {MILESTONES[currentStep].question}
                </motion.h4>
                <p className="text-sm text-gray-400">
                  Choose the outcome that best matches your goals
                </p>
              </div>

              {/* Scenarios */}
              <div className="grid gap-4">
                {MILESTONES[currentStep].scenarios.map((scenario, index) => (
                  <motion.button
                    key={index}
                    className={`w-full p-6 rounded-xl ${currentColor.bg} border ${currentColor.border} ${currentColor.hover} transition-all duration-300 text-left group`}
                    onClick={() => handleScenarioSelect(scenario)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${currentColor.bg} ${currentColor.border} flex items-center justify-center flex-shrink-0`}>
                        {scenario.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-white text-lg">{scenario.title}</h5>
                          <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ${currentColor.text}`} />
                        </div>
                        <p className="text-gray-300 mb-3">{scenario.description}</p>
                        <div className={`text-sm ${currentColor.text} ${currentColor.bg} px-3 py-1 rounded-full inline-block mb-3`}>
                          {scenario.impact}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
                          {scenario.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${currentColor.bg}`} />
                              <span className="text-sm text-gray-400">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
              <div className="mb-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Your Success Path is Ready!</h4>
                <p className="text-gray-400 text-sm">
                  Here's your personalized roadmap with BlogStorm.ai
                </p>
              </div>

              <div className="grid gap-6 mb-12 max-w-3xl mx-auto">
                {selectedScenarios.map((scenario, index) => {
                  const milestone = MILESTONES[index];
                  const color = colorVariants[milestone.color as keyof typeof colorVariants];
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 rounded-xl ${color.bg} ${color.border}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${color.bg} ${color.border} flex items-center justify-center flex-shrink-0`}>
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <div className="font-medium text-white">{milestone.title}</div>
                            <div className={`text-sm ${color.text} ${color.bg} px-2 py-0.5 rounded-full`}>
                              {scenario.title}
                            </div>
                          </div>
                          <p className="text-gray-300 mb-3">{scenario.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {scenario.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${color.bg}`} />
                                <span className="text-sm text-gray-400">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.a
                href="https://app.blogstorm.ai/settings/subscription/black-friday"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-black font-bold transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Success Journey Now
                <Rocket className="w-5 h-5" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};