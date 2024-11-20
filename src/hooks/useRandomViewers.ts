import { useState, useEffect } from 'react';

export const useRandomViewers = (min: number = 3, max: number = 15, interval: number = 15000) => {
  const [viewerCount, setViewerCount] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  useEffect(() => {
    const timer = setInterval(() => {
      // Generate new count that's at most ±2 from current count
      const change = Math.floor(Math.random() * 3) * (Math.random() < 0.5 ? -1 : 1);
      const newCount = Math.min(max, Math.max(min, viewerCount + change));
      setViewerCount(newCount);
    }, interval);

    return () => clearInterval(timer);
  }, [min, max, interval, viewerCount]);

  return viewerCount;
};