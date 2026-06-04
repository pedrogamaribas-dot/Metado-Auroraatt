import React from 'react';

interface GoldDiamondProps {
  className?: string;
  size?: number;
  color?: string;
}

export const GoldDiamond: React.FC<GoldDiamondProps> = ({
  className = "",
  size = 8,
  color = "#AE8625"
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none transform rotate-45 ${className}`}
    >
      <rect width="8" height="8" fill={color} />
    </svg>
  );
};

export default GoldDiamond;
