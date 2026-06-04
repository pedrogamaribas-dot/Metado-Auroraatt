import React from 'react';
import { motion } from 'framer-motion';

interface CrownDividerProps {
  className?: string;
  glow?: boolean;
}

export const CrownDivider: React.FC<CrownDividerProps> = ({
  className = "",
  glow = true,
}) => {
  return (
    <div className={`w-full flex flex-col items-center relative py-12 overflow-visible select-none pointer-events-none ${className}`}>
      
      {/* Layer 1: Soft Golden Ambient Lighting Glow */}
      {glow && (
        <div 
          className="absolute w-[200px] h-[50px] rounded-full blur-[25px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
          style={{
            background: 'radial-gradient(ellipse, rgba(174, 134, 37, 0.15) 0%, transparent 70%)'
          }}
        />
      )}

      {/* Layer 2: Delicate Floating Golden Particles (Framer Motion Animated) */}
      <div className="absolute inset-0 overflow-visible z-10">
        {[
          { id: 1, x: "47%", y: "30%", size: 3, delay: 0, duration: 4 },
          { id: 2, x: "53%", y: "45%", size: 2.5, delay: 1, duration: 5 },
          { id: 3, x: "49%", y: "65%", size: 3.5, delay: 0.5, duration: 4.5 },
          { id: 4, x: "51%", y: "15%", size: 2, delay: 1.5, duration: 3.5 },
          { id: 5, x: "46%", y: "55%", size: 2.5, delay: 2, duration: 6 },
        ].map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#F7EF8A] shadow-[0_0_8px_rgba(247,239,138,0.8)]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.x,
              top: p.y,
            }}
            animate={{
              y: [-6, 6, -6],
              opacity: [0.25, 0.85, 0.25],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Layer 3: Crown Divider SVG Structure (Wide Horizontal Composition) */}
      <svg
        width="100%"
        height="40"
        viewBox="0 0 1000 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[90%] md:w-[75%] z-20 relative overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Left thin gold line fading to transparent on the far left */}
        <path
          d="M80 20 H455"
          stroke="url(#gold-line-left)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Right thin gold line fading to transparent on the far right */}
        <path
          d="M545 20 H920"
          stroke="url(#gold-line-right)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Centered Golden Crown Element (Centered at X=500, viewBox height 40) */}
        <g transform="translate(465, -4)">
          {/* Minimalist 3-Peak Crown outline with curved swept peaks */}
          <path
            d="M21 24L11 12L24 17L35 6L46 17L59 12L49 24 C44 25.5, 26 25.5, 21 24 Z"
            stroke="#AE8625"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Subtle gold base curve highlight */}
          <path
            d="M23.5 24 C28 25, 42 25, 46.5 24"
            stroke="#F7EF8A"
            strokeWidth="1"
            strokeLinecap="round"
          />
          {/* Small diamond ornament directly below the crown */}
          <path
            d="M35 28.5L37.5 31L35 33.5L32.5 31Z"
            fill="#AE8625"
          />
          {/* Soft inner diamond highlight */}
          <circle cx="35" cy="31" r="0.8" fill="#F7EF8A" />
        </g>

        {/* Gradient Definitions */}
        <defs>
          {/* Left Line Gradient: Transparent (0%) to Rich Gold (100%) */}
          <linearGradient id="gold-line-left" x1="80" y1="20" x2="455" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AE8625" stopOpacity="0" />
            <stop offset="50%" stopColor="#AE8625" stopOpacity="0.45" />
            <stop offset="85%" stopColor="#AE8625" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F7EF8A" stopOpacity="1" />
          </linearGradient>

          {/* Right Line Gradient: Rich Gold (0%) to Transparent (100%) */}
          <linearGradient id="gold-line-right" x1="545" y1="20" x2="920" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F7EF8A" stopOpacity="1" />
            <stop offset="15%" stopColor="#AE8625" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#AE8625" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#AE8625" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
    </div>
  );
};

export default CrownDivider;
