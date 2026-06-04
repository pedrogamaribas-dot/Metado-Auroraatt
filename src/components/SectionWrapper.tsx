import React from 'react';
import { motion } from 'framer-motion';
import BackgroundOrbs from './ui/BackgroundOrbs';
import BokehParticles from './ui/BokehParticles';
import NoiseOverlay from './ui/NoiseOverlay';
import IMAGE_CONSTANTS from '../constants/images';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  variant?: 'light' | 'dark';
  style?: React.CSSProperties;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = "",
  variant = 'light',
  style,
}) => {
  const bgStyle = variant === 'light' ? "" : "bg-[#2C1A0E]";
  const lightBgStyle = variant === 'light' ? {
    backgroundImage: `url(${IMAGE_CONSTANTS.bgLightPattern})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  } : {};

  return (
    <motion.section
      id={id}
      className={`relative w-full py-28 px-6 md:px-16 lg:px-24 overflow-hidden ${bgStyle} ${className}`}
      style={{ ...lightBgStyle, ...style }}
      initial={{ opacity: 0, y: 45, scale: 0.97, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Layer 1: Ambient Blurry Gradient Orbs */}
      <BackgroundOrbs variant={variant} />

      {/* Layer 2: Glowing Animated Bokeh Particles */}
      <BokehParticles variant={variant} />

      {/* Layer 3: SVGs Turbulence Fractal Film Grain Noise Overlay */}
      <NoiseOverlay />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
