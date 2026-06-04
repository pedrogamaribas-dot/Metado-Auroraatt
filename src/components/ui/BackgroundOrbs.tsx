import React from 'react';

interface BackgroundOrbsProps {
  variant?: 'light' | 'dark';
}

export const BackgroundOrbs: React.FC<BackgroundOrbsProps> = ({ variant = 'light' }) => {
  if (variant === 'light') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1] will-change-transform">
        {/* Orb A */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            top: '-10%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(174, 134, 37, 0.13) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Orb B */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            bottom: '-15%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(182, 117, 57, 0.10) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Orb C */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '350px',
            height: '350px',
            top: '40%',
            left: '30%',
            background: 'radial-gradient(circle, rgba(247, 239, 138, 0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>
    );
  }

  // Dark variant
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[1] will-change-transform">
      {/* Orb A */}
      <div 
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          top: '-5%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(174, 134, 37, 0.09) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />
      {/* Orb B */}
      <div 
        className="absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          bottom: '0%',
          left: '5%',
          background: 'radial-gradient(circle, rgba(182, 117, 57, 0.07) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      {/* Orb C */}
      <div 
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          top: '50%',
          right: '30%',
          background: 'radial-gradient(circle, rgba(247, 239, 138, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
