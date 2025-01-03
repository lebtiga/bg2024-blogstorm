import React, { useState } from 'react';
import { Rocket, Users, Gift, Clock, Infinity, Play, Trophy, Share2, Zap, Star, Check, Lock } from 'lucide-react';
import { LaunchBackground } from './components/LaunchBackground';
import { AnimatedFooter } from './components/AnimatedFooter';
import { VideoModal } from './components/VideoModal';
import { MilestoneTracker } from './components/MilestoneTracker';
import { SocialProof } from './components/SocialProof';
import { PricingCard } from './components/PricingCard';
import { SuccessVision } from './components/SuccessVision';
import { ConsultationBanner } from './components/ConsultationBanner';
import { FoundersDescription } from './components/FoundersDescription';
import { SatisfactionGuarantee } from './components/SatisfactionGuarantee';
import { TestimonialGrid } from './components/TestimonialGrid';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentFounders] = useState(16);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      <LaunchBackground />
      
      <VideoModal
        videoId="ydBOgrgkac8"
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
      
      <div className="relative">
        <header className="container mx-auto px-4 py-8 text-center">
          <img 
            src="https://blogstorm.ai/wp-content/uploads/2023/11/logo.png" 
            alt="Blogstorm.ai" 
            className="h-12 mx-auto mb-4 animate-fade-in"
          />
          <div className="flex flex-col items-center gap-4 sm:gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full text-sm font-medium animate-pulse-slow">
              <Rocket className="w-4 h-4" />
              LAUNCHING NOW - 100 FOUNDERS LIFETIME DEAL
              <Rocket className="w-4 h-4" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full text-sm font-medium">
              <Users className="w-4 h-4" />
              100 FOUNDERS ONLY
              <Clock className="w-4 h-4" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              LAUNCHING NOW
            </h1>
            <div className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              100 FOUNDERS LIFETIME DEAL
            </div>
            <p className="text-lg text-emerald-400 mb-8">
              🔥 {currentFounders}/100 Founders joined
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_50px_rgba(52,211,153,0.5)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-emerald-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-black/30 rounded-xl">
                  <Play className="w-6 h-6 text-black fill-current" />
                </div>
                <span className="text-xl font-bold text-black">Watch Demo Video</span>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-300/50 animate-pulse"></div>
            </button>
          </div>

          <ProgressBar currentFounders={currentFounders} />
          
          <FoundersDescription />
          
          <PricingCard currentFounders={currentFounders} />

          <MilestoneTracker currentFounders={currentFounders} />

          <SocialProof 
            currentFounders={currentFounders}
          />

          <ConsultationBanner />

          <SuccessVision />
          
          <TestimonialGrid />

          <SatisfactionGuarantee />
        </main>

        <AnimatedFooter />
      </div>
    </div>
  );
}

export default App;