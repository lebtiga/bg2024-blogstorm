import React, { useState } from 'react';
import { Rocket, Users, Headphones, Settings, Sparkles, Gift, Clock, Infinity, Play, Check } from 'lucide-react';
import { LaunchBackground } from './components/LaunchBackground';
import { AnimatedFooter } from './components/AnimatedFooter';
import { VideoModal } from './components/VideoModal';
import { CountdownTimer } from './components/CountdownTimer';
import { SuccessVision } from './components/SuccessVision';

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState({ tier1: 0, tier2: 10 });

  const features = [
    { icon: <Rocket className="w-6 h-6" />, text: "PAA Mode: Bulk People Also Ask SEO-optimized blogs" },
    { icon: <Users className="w-6 h-6" />, text: "GeoPages Mode: Mass GeoPages in SILO structure" },
    { icon: <Headphones className="w-6 h-6" />, text: "Blog to Podcast Converter" },
    { icon: <Settings className="w-6 h-6" />, text: "Your Own OpenAI API Integration" }
  ];

  const pricingFeatures = [
    "Lifetime Access",
    "1000 Credits/Month",
    "All modes",
    "All Future modes and Updates",
    "Your own API keys",
    "Priority Support"
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative">
      <LaunchBackground />
      
      <VideoModal
        videoId="your-video-id-here"
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
      
      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="container mx-auto px-4 py-8 text-center">
          <img 
            src="https://blogstorm.ai/wp-content/uploads/2023/11/logo.png" 
            alt="Blogstorm.ai" 
            className="h-12 mx-auto mb-4 animate-fade-in"
          />
          <div className="flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full text-sm font-medium animate-pulse-slow">
              <Sparkles className="w-4 h-4" />
              OFFICIAL LAUNCH - BLACK FRIDAY SPECIAL
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full text-sm font-medium">
              <Infinity className="w-4 h-4" />
              LIFETIME DEAL - NEVER PAY AGAIN
              <Clock className="w-4 h-4" />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              LAUNCHING NOW
            </h1>
            <div className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              BLACK FRIDAY LIFETIME DEAL
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              One-time payment, lifetime access! Transform your SEO game forever with BlogStorm.ai
            </p>
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

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-2xl blur group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-black/90 rounded-2xl p-8 border border-emerald-500/50 hover:border-emerald-500 transition-all duration-300">
                <div className="absolute -top-3 -right-3 bg-red-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  SOLD OUT
                </div>
                <div className="text-emerald-400 text-sm font-medium mb-2">LAUNCH SPECIAL - TIER 1</div>
                <div className="text-5xl font-bold mb-2">$199</div>
                <div className="text-gray-400 mb-4">First 10 Seats Only</div>
                <div className="mb-6 text-red-400 font-bold animate-pulse">
                  0 seats remaining
                </div>
                <div className="space-y-3 mb-6">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Infinity className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button disabled className="w-full py-4 rounded-xl bg-gray-600 cursor-not-allowed text-gray-300 font-bold">
                  Sold Out
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl blur group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-black/90 rounded-2xl p-8 border border-purple-500/50 hover:border-purple-500 transition-all duration-300">
                <div className="absolute -top-3 -right-3 bg-purple-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  LIFETIME ACCESS
                </div>
                <div className="text-purple-400 text-sm font-medium mb-2">LAUNCH SPECIAL - TIER 2</div>
                <div className="text-5xl font-bold mb-2">$399</div>
                <div className="text-gray-400 mb-4">Next 10 Seats</div>
                <div className="mb-6 text-purple-400 font-bold">
                  {seatsLeft.tier2} seats remaining
                </div>
                <div className="space-y-3 mb-6">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Infinity className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-400 hover:from-purple-500 hover:to-pink-300 transition-all duration-300 font-bold text-black">
                  Claim Your Lifetime Access
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-400 rounded-2xl blur group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-black/90 rounded-2xl p-8 border border-gray-500/50 hover:border-gray-500 transition-all duration-300">
                <div className="absolute -top-3 -right-3 bg-gray-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  LIFETIME ACCESS
                </div>
                <div className="text-gray-400 text-sm font-medium mb-2">REGULAR PRICE</div>
                <div className="text-5xl font-bold mb-2">$499</div>
                <div className="text-gray-400 mb-4">Beyond 20 Seats</div>
                <div className="mb-6 text-gray-400 font-bold">
                  Regular pricing
                </div>
                <div className="space-y-3 mb-6">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Infinity className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-gray-600 to-gray-400 hover:from-gray-500 hover:to-gray-300 transition-all duration-300 font-bold text-black">
                  Get Lifetime Access
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <div className="flex-1">{feature.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Section */}
          <div className="glass-card rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Gift className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold">Our Launch Guarantee</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-emerald-400">Free Consultation</h3>
                <p className="text-gray-300">
                  Get a 20-minute screen share to ensure you're maximizing BlogStorm.ai's potential.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-emerald-400">Full Refund + Coffee Gift Card</h3>
                <p className="text-gray-300">
                  Not completely satisfied? Get your money back and enjoy a coffee on us!
                </p>
              </div>
            </div>
          </div>

          {/* Success Vision */}
          <SuccessVision />

          {/* Final CTA */}
          <div className="text-center animate-pulse-slow">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Join the Launch - Get Lifetime Access Today!
            </h2>
            <button className="px-12 py-6 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl text-2xl font-bold text-black hover:from-emerald-500 hover:to-emerald-300 transition-all duration-300 transform hover:scale-105">
              Launch with Us 🚀
            </button>
          </div>
        </main>

        <AnimatedFooter />
      </div>
    </div>
  );
}

export default App;