import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ConsultationBanner: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-8 mb-16 relative overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Have Questions? Let's Chat!</h3>
            <p className="text-gray-400">Schedule a friendly call to discuss the Black Friday deal</p>
          </div>
        </div>

        <a
          href="https://calendar.app.google/gvCMrUMLby3pKXYBA"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-400 hover:from-purple-500 hover:to-pink-300 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105"
        >
          <Calendar className="w-5 h-5" />
          Schedule a Call
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};