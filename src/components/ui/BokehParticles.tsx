import React, { useMemo } from 'react';

interface BokehParticlesProps {
  variant?: 'light' | 'dark';
}

export const BokehParticles: React.FC<BokehParticlesProps> = ({ variant = 'light' }) => {
  const particles = useMemo(() => {
    // Generate exactly 18 stable particles
    const list = [];
    const sizes = [4, 6, 8, 10, 14];
    
    // Seeded random numbers to ensure stable renders
    let seed = 42;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < 18; i++) {
      const size = sizes[i % sizes.length];
      const top = 5 + random() * 85; // 5% to 90%
      const left = 2 + random() * 93; // 2% to 95%
      
      let opacity = 0;
      let blur = 0;
      
      if (variant === 'light') {
        opacity = 0.08 + random() * (0.22 - 0.08); // 0.08 to 0.22
        blur = 1 + random() * 3; // 1px to 4px
      } else {
        opacity = 0.12 + random() * (0.30 - 0.12); // 0.12 to 0.30
        blur = 1 + random() * 4; // 1px to 5px
      }
      
      const duration = 3 + random() * 4; // 3s to 7s
      const delay = random() * 4; // 0s to 4s
      
      list.push({
        id: i,
        size,
        top: `${top.toFixed(2)}%`,
        left: `${left.toFixed(2)}%`,
        opacity,
        blur: `${blur.toFixed(1)}px`,
        duration: `${duration.toFixed(2)}s`,
        delay: `${delay.toFixed(2)}s`,
      });
    }
    return list;
  }, [variant]);

  const bgColor = variant === 'light' ? '#AE8625' : '#F7EF8A';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-[2]">
      {particles.map((p) => {
        // Base opacity * 0.6 for min pulse
        const opMin = p.opacity * 0.6;
        const opMax = p.opacity;
        
        return (
          <div
            key={p.id}
            className="absolute rounded-full animate-bokeh-pulse"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: p.top,
              left: p.left,
              backgroundColor: bgColor,
              filter: `blur(${p.blur})`,
              // Inject custom properties for the animation
              '--base-op-min': opMin,
              '--base-op-max': opMax,
              '--bokeh-duration': p.duration,
              '--bokeh-delay': p.delay,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

export default BokehParticles;
