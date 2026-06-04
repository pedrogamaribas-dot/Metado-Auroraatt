import React from 'react';

interface GoldDividerProps {
  className?: string;
  marginClass?: string;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = "",
  marginClass = "my-8"
}) => {
  return (
    <div className={`w-full flex justify-center select-none pointer-events-none ${marginClass} ${className}`}>
      <svg
        width="100%"
        height="1"
        viewBox="0 0 1000 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[80%] md:w-[60%] animate-pulse-divider"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0.5H1000"
          stroke="url(#gold-gradient-v2)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="gold-gradient-v2" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#AE8625" stopOpacity="0" />
            <stop offset="30%" stopColor="#AE8625" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#F7EF8A" stopOpacity="1" />
            <stop offset="70%" stopColor="#AE8625" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#AE8625" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GoldDivider;
