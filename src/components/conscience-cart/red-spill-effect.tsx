"use client";

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RedSpillEffectProps {
  onCompleted: () => void;
  drips?: number;
}

export function RedSpillEffect({ onCompleted, drips = 15 }: RedSpillEffectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleted();
    }, 3000); // Duration of the longest animation

    return () => clearTimeout(timer);
  }, [onCompleted]);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
      {Array.from({ length: drips }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 1.5}s, ${Math.random() * 1.5 + 1}s`,
          animationDuration: `${Math.random() * 1 + 1}s, 1s`,
        };
        return (
          <div
            key={i}
            className={cn(
              "absolute -top-4 w-1 h-8 bg-red-600/70 rounded-b-full",
              "animate-[drip_forwards,fade-out-drip_forwards]"
            )}
            style={style}
          />
        );
      })}
    </div>
  );
}
