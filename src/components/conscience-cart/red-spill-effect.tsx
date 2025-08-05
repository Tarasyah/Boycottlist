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
              "absolute -top-8 w-6 h-8 text-red-600/70",
              "animate-[drip_forwards,fade-out-drip_forwards]"
            )}
            style={style}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}