import React from 'react';
import { Shield, Coffee, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const SatisfactionGuarantee: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-16 relative overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-emerald-400" />
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
            100% Satisfaction Guarantee
          </h2>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your success is our priority. We're so confident in BlogStorm's value that we're offering a risk-free guarantee with a twist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 border border-emerald-500/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">30-Day Success Check-In</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Within your first 30 days, schedule a personal success meeting with our team. We'll ensure you're maximizing BlogStorm's potential and getting the results you deserve.
                </p>
                <a
                  href="https://calendar.app.google/gvCMrUMLby3pKXYBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                  Schedule Your Success Meeting
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Coffee className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Coffee's On Us Guarantee</h3>
                <p className="text-gray-400 text-sm mb-4">
                  If after our success meeting you're not completely satisfied, we'll refund your investment AND send you a coffee gift card. Because either way, we want you to walk away happy.
                </p>
                <div className="flex items-center gap-2 text-purple-400 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>No questions asked refund</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-gray-300">30-Day Money-Back Guarantee + Coffee Gift Card</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};