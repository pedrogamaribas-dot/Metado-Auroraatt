import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none select-none z-[3] mix-blend-mode-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.028,
        mixBlendMode: 'overlay',
        willChange: 'opacity',
      }}
    />
  );
};

export default NoiseOverlay;
