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
          <span>Built</span>
          <span>with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>in</span>
          <span className="font-medium">Chicago 🇺🇸</span>
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