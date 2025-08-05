"use client";

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Droplet } from 'lucide-react';

interface RedSpillEffectProps {
  onCompleted: () => void;
  rockets?: number;
}

export function RedSpillEffect({ onCompleted, rockets = 25 }: RedSpillEffectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleted();
    }, 4000); // Duration of the animation

    return () => clearTimeout(timer);
  }, [onCompleted]);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
      {Array.from({ length: rockets }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 2 + 2}s`,
          animationDelay: `${Math.random() * 1}s`,
        };
        return (
          <div
            key={i}
            className={cn(
              "absolute top-0 text-red-800 animate-flow",
            )}
            style={style}
          >
            <Droplet className="w-6 h-6" fill="currentColor" />
          </div>
        );
      })}
    </div>
  );
}
