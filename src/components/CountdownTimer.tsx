import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date('2024-11-29T23:59:59').getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Clock className="w-6 h-6 text-emerald-400" />
        <h3 className="text-xl font-semibold text-emerald-400">Black Friday Deal Ends In:</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-400">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};