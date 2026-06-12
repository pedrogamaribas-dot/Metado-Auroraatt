import React from 'react';
import { motion } from 'framer-motion';

const BOKEH_PARTICLES = [
  { top: '12%', left: '8%', size: 'w-2 h-2', bg: 'bg-[#AE8625]/30', blur: 'blur-[1px]', duration: 5.2, delay: 0.2 },
  { top: '25%', left: '85%', size: 'w-3 h-3', bg: 'bg-[#F7EF8A]/40', blur: 'blur-[2px]', duration: 6.8, delay: 1.5 },
  { top: '38%', left: '15%', size: 'w-1.5 h-1.5', bg: 'bg-[#C4A882]/35', blur: 'blur-[1px]', duration: 4.5, delay: 0.8 },
  { top: '8%', left: '60%', size: 'w-3 h-3', bg: 'bg-[#AE8625]/30', blur: 'blur-[2px]', duration: 7.2, delay: 2.1 },
  { top: '48%', left: '72%', size: 'w-2 h-2', bg: 'bg-[#F7EF8A]/40', blur: 'blur-[1px]', duration: 5.9, delay: 0.4 },
  { top: '62%', left: '22%', size: 'w-3 h-3', bg: 'bg-[#C4A882]/35', blur: 'blur-[2px]', duration: 8.1, delay: 1.2 },
  { top: '75%', left: '88%', size: 'w-1 h-1', bg: 'bg-[#AE8625]/30', blur: 'blur-[1px]', duration: 4.9, delay: 0.7 },
  { top: '82%', left: '40%', size: 'w-2 h-2', bg: 'bg-[#F7EF8A]/40', blur: 'blur-[2px]', duration: 6.3, delay: 1.9 },
  { top: '19%', left: '45%', size: 'w-2 h-2', bg: 'bg-[#C4A882]/35', blur: 'blur-[1px]', duration: 5.5, delay: 1.1 },
  { top: '33%', left: '92%', size: 'w-1 h-1', bg: 'bg-[#AE8625]/30', blur: 'blur-[1px]', duration: 4.1, delay: 0.3 },
  { top: '55%', left: '5%', size: 'w-3 h-3', bg: 'bg-[#F7EF8A]/40', blur: 'blur-[2px]', duration: 7.8, delay: 2.4 },
  { top: '68%', left: '55%', size: 'w-2 h-2', bg: 'bg-[#C4A882]/35', blur: 'blur-[1px]', duration: 6.0, delay: 0.9 },
  { top: '90%', left: '78%', size: 'w-3 h-3', bg: 'bg-[#AE8625]/30', blur: 'blur-[2px]', duration: 8.5, delay: 1.6 },
  { top: '42%', left: '38%', size: 'w-2 h-2', bg: 'bg-[#F7EF8A]/40', blur: 'blur-[1px]', duration: 5.0, delay: 0.6 },
  { top: '88%', left: '12%', size: 'w-1.5 h-1.5', bg: 'bg-[#C4A882]/35', blur: 'blur-[1px]', duration: 4.3, delay: 1.3 },
  { top: '50%', left: '95%', size: 'w-3 h-3', bg: 'bg-[#AE8625]/30', blur: 'blur-[2px]', duration: 7.0, delay: 2.0 },
  { top: '72%', left: '30%', size: 'w-2 h-2', bg: 'bg-[#F7EF8A]/40', blur: 'blur-[1px]', duration: 5.7, delay: 0.5 },
  { top: '30%', left: '30%', size: 'w-3 h-3', bg: 'bg-[#C4A882]/35', blur: 'blur-[2px]', duration: 6.5, delay: 1.0 }
];

export const GlobalBackdrop: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_0%,#F3E9D7_0%,#FFF9EC_45%,#FBF3E2_100%)]" />

      {/* 2. Warm Light Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[140px] bg-[#E8D9C0]/60" />
      <div className="absolute top-[35%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] bg-[#F7EF8A]/20" />

      {/* 3. Gold Bokeh Particles */}
      <div className="absolute inset-0 z-10">
        {BOKEH_PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${particle.size} ${particle.bg} ${particle.blur}`}
            style={{
              top: particle.top,
              left: particle.left,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 4. Decorative Arcs */}
      {/* Top-Right Arc */}
      <svg
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] pointer-events-none opacity-40 z-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M 100 0 A 100 100 0 0 0 0 100" stroke="url(#backdrop-arc-tr)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="backdrop-arc-tr" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AE8625" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#AE8625" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-Left Arc */}
      <svg
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] pointer-events-none opacity-40 z-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M 0 100 A 100 100 0 0 0 100 0" stroke="url(#backdrop-arc-bl)" strokeWidth="0.5" />
        <defs>
          <linearGradient id="backdrop-arc-bl" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AE8625" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#AE8625" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 5. Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,#E8D9C0/40_100%)] z-10" />
    </div>
  );
};

export default GlobalBackdrop;
