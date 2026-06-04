import React from 'react';

interface EyebrowProps {
  text: string;
  className?: string;
  lightBg?: boolean;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  text,
  className = "",
  lightBg = true,
}) => {
  const color = lightBg ? "text-[#AE8625]" : "text-[#F7EF8A]";
  
  return (
    <div className={`flex items-center gap-2 font-montserrat text-[11px] font-light tracking-[0.3em] uppercase select-none mb-4 ${color} ${className}`}>
      <span className="text-[8px] translate-y-[-0.5px]">◆</span>
      <span>{text}</span>
    </div>
  );
};

export default Eyebrow;
