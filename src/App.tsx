import React, { useState } from 'react';
import { Rocket, Users, Gift, Clock, Infinity, Play, Trophy, Share2, Zap, Star, Check, Lock } from 'lucide-react';
import { LaunchBackground } from './components/LaunchBackground';
import { AnimatedFooter } from './components/AnimatedFooter';
import { VideoModal } from './components/VideoModal';
import { CountdownTimer } from './components/CountdownTimer';
import { MilestoneTracker } from './components/MilestoneTracker';
import { SocialProof } from './components/SocialProof';
import { PricingCard } from './components/PricingCard';
import { SuccessVision } from './components/SuccessVision';
import { ConsultationBanner } from './components/ConsultationBanner';
import { FoundersDescription } from './components/FoundersDescription';
import { SatisfactionGuarantee } from './components/SatisfactionGuarantee';

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentFounders] = useState(23);
  const [viewersCount] = useState(3);
  const [lastClaimMinutes] = useState(2);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      <LaunchBackground />
      
      <VideoModal
        videoId="your-video-id-here"
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
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full text-sm font-medium animate-pulse-slow">
              <Rocket className="w-4 h-4" />
              LAUNCHING NOW - BLACK FRIDAY SPECIAL
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
              BLACK FRIDAY LIFETIME DEAL
            </div>
            <p className="text-lg text-emerald-400 mb-8">
              🔥 {currentFounders}/100 Founders joined | 7 people claimed their spot in the last 24hrs
            </p>
          </div>

          <CountdownTimer />
          
          <FoundersDescription />
          
          <PricingCard currentFounders={currentFounders} />

          <div className="flex items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-500 rounded-full">
                <Play className="w-6 h-6 text-black fill-current" />
              </div>
              <span className="text-lg font-medium">Watch How It Works</span>
            </button>
          </div>

          <MilestoneTracker currentFounders={currentFounders} />

          <SocialProof 
            viewersCount={viewersCount}
            lastClaimMinutes={lastClaimMinutes}
            currentFounders={currentFounders}
          />

          <ConsultationBanner />

          <SuccessVision />

          <SatisfactionGuarantee />
        </main>

        <AnimatedFooter />
      </div>
    </div>
  );
}

export default App;