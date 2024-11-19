import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const messages = [
  "Created with ❤️ by Saasperity",
  "Born from late-night debugging sessions",
  "Fueled by coffee and determination",
  "Built through trials and triumphs"
];

export const AnimatedFooter = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const message = messages[messageIndex];
      if (currentMessage.length < message.length) {
        timeout = setTimeout(() => {
          setCurrentMessage(message.slice(0, currentMessage.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentMessage.length > 0) {
        timeout = setTimeout(() => {
          setCurrentMessage(currentMessage.slice(0, -1));
        }, 30);
      } else {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentMessage, isTyping, messageIndex]);

  return (
    <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/10">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-red-500">Built</span>
          <span className="text-white">with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-blue-500">in</span>
          <div className="relative">
            <span className="bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent font-bold">
              America
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-white/20 to-blue-500/20 blur-sm -z-10"></div>
          </div>
        </div>
        
        <div className="h-6 text-sm text-gray-400">
          <span className="inline-block min-w-[20ch]">{currentMessage}</span>
          <span className="animate-pulse">|</span>
        </div>

        <div className="text-sm text-gray-400">
          © 2024 BlogStorm.ai. Powered by{' '}
          <a 
            href="https://saasperity.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
          >
            Saasperity
          </a>
        </div>
      </div>
    </footer>
  );
};