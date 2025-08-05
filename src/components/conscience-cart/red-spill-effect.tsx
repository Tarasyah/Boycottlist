"use client";

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RedSpillEffectProps {
  onCompleted: () => void;
}

export function RedSpillEffect({ onCompleted }: RedSpillEffectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCompleted();
    }, 2000); // Duration of the animation + fade out

    return () => clearTimeout(timer);
  }, [onCompleted]);

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      <div 
        className={cn(
          "absolute top-0 left-0 w-full h-0 bg-red-600/70",
          "animate-[spill-down_1s_ease-out_forwards,fade-out_1s_ease-in_1s_forwards]"
        )}
      />
    </div>
  );
}
