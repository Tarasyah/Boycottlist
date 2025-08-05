"use client";

import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

interface RedSpillEffectProps {
  onCompleted: () => void;
  rockets?: number;
}

export function RedSpillEffect({ onCompleted, rockets = 15 }: RedSpillEffectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleted();
    }, 2000); // Duration of the animation

    return () => clearTimeout(timer);
  }, [onCompleted]);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none overflow-hidden">
      {Array.from({ length: rockets }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 0.5 + 0.5}s`,
        };
        return (
          <div
            key={i}
            className={cn(
              "absolute text-red-700/80 animate-[shake_ease-in-out_infinite,fade-out_forwards_1.5s]",
            )}
            style={style}
          >
            <Rocket className="w-8 h-8" />
          </div>
        );
      })}
    </div>
  );
}
