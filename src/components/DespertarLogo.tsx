import React from 'react';

interface DespertarLogoProps {
  lightBg?: boolean; // If true, colors are brown/gold. If false, colors are gold/lightgold on dark background
  className?: string;
  layout?: 'vertical' | 'horizontal' | 'crown-only';
  size?: 'sm' | 'md' | 'lg';
}

export const DespertarLogo: React.FC<DespertarLogoProps> = ({
  lightBg = true,
  className = "",
  layout = "vertical",
  size = "md",
}) => {
  const crownColor = lightBg ? "#3B2314" : "#F7EF8A";
  const textColorUpper = lightBg ? "#7A5C44" : "#AE8625";
  const textColorMain = lightBg ? "#3B2314" : "#F7EF8A";

  // Sizing mappings that preserve correct aspect ratios for each layout
  const sizes = {
    vertical: {
      sm: { w: 140, h: 63 },
      md: { w: 220, h: 99 },
      lg: { w: 300, h: 135 },
    },
    horizontal: {
      sm: { w: 160, h: 35 },
      md: { w: 240, h: 53 },
      lg: { w: 320, h: 71 },
    },
    crown: {
      sm: { w: 36, h: 24 },
      md: { w: 54, h: 36 },
      lg: { w: 72, h: 48 },
    }
  };

  const crownPath = (
    <path
      d="M12 32C9 30.5 6.5 27.5 5 24C8.5 24 12.5 25.5 15 27C18.5 20.5 22.5 14 24 11C26 14.5 29 20 30.5 24C32.5 17.5 35.5 10 36 6C36.5 10 39.5 17.5 41.5 24C43 20 46 14.5 48 11C49.5 14 53.5 20.5 57 27C59.5 25.5 63.5 24 67 24C65.5 27.5 63 30.5 60 32C51 35 43.5 35.5 36 35.5C28.5 35.5 21 35 12 32Z"
      fill={crownColor}
    />
  );

  const crownTriangle = (
    <path
      d="M36 29L31 34H41L36 29Z"
      fill={crownColor}
    />
  );

  const crownDiamond = (
    <path
      d="M36 36.5L39 39.5L36 42.5L33 39.5L36 36.5Z"
      fill={crownColor}
    />
  );

  // Stylized vector paths for 'A U R O R A' [Width: 276px, Height: 37px]
  const auroraPaths = (
    <g fill={textColorMain}>
      {/* A (Letter 1: [0, 36], peak at 18) */}
      <path d="M0 37 L16 0 H20 L36 37 H30 L18 5 L6 37 H0 Z" />
      
      {/* U (Letter 2: [48, 84]) */}
      <path d="M48 0 H54 V20 C54 28, 59 32, 66 32 C73 32, 78 28, 78 20 V0 H84 V20 C84 33, 75 37, 66 37 C57 37, 48 33, 48 20 V0 Z" />
      
      {/* R (Letter 3: [96, 132]) */}
      <path d="M96 0 H116 C126 0, 132 4, 132 11 C132 18, 126 22, 116 22 H102 V37 H96 V0 Z M102 5 V17 H116 C121 17, 126 14, 126 11 C126 8, 121 5, 116 5 H102 Z M116 22 L132 37 H124 L109 22 H116 Z" />
      
      {/* O (Letter 4: [144, 180]) */}
      <path d="M144 18.5 C144 7, 152 0, 162 0 C172 0, 180 7, 180 18.5 C180 30, 172 37, 162 37 C152 37, 144 30, 144 18.5 Z M150 18.5 C150 27, 155 33, 162 33 C169 33, 174 27, 174 18.5 C174 10, 169 4, 162 4 C155 4, 150 10, 150 18.5 Z" />
      
      {/* R (Letter 5: [192, 228]) */}
      <path d="M192 0 H212 C222 0, 228 4, 228 11 C228 18, 222 22, 212 22 H198 V37 H192 V0 Z M198 5 V17 H212 C217 17, 222 14, 222 11 C222 8, 217 5, 212 5 H198 Z M212 22 L228 37 H220 L205 22 H212 Z" />
      
      {/* A (Letter 6: [240, 276]) */}
      <path d="M240 37 L256 0 H260 L276 37 H270 L258 5 L246 37 H240 Z" />
    </g>
  );

  // Render Layout 1: Crown Only
  if (layout === "crown-only") {
    const dim = sizes.crown[size];
    return (
      <svg
        width={dim.w}
        height={dim.h}
        viewBox="0 0 72 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      >
        {crownPath}
        {crownTriangle}
        {crownDiamond}
      </svg>
    );
  }

  // Render Layout 2: Horizontal (Crown on Left, Text Stack on Right - Single SVG Viewport)
  if (layout === "horizontal") {
    const dim = sizes.horizontal[size];
    return (
      <svg
        width={dim.w}
        height={dim.h}
        viewBox="0 0 360 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
      >
        {/* Crown placed at left margin X=10, Y=16, sized 72x48 */}
        <g transform="translate(10, 16)">
          {crownPath}
          {crownTriangle}
          {crownDiamond}
        </g>

        {/* DESPERTAR DA text at X=96, Y=30 */}
        <text
          x="96"
          y="30"
          fill={textColorUpper}
          fontSize="17"
          fontWeight="300"
          letterSpacing="0.25em"
          fontFamily="Montserrat, sans-serif"
        >
          DESPERTAR DA
        </text>

        {/* AURORA Stylized geometric paths at X=96, Y=42, scaled slightly to 90% */}
        <g transform="translate(96, 42) scale(0.9)">
          {auroraPaths}
        </g>
      </svg>
    );
  }

  // Render Layout 3: Vertical Stack (Crown on Top, Text Stack below - Single SVG Viewport)
  // Exactly matching the client logo lockup image with zero overlap risk
  const dim = sizes.vertical[size];
  return (
    <svg
      width={dim.w}
      height={dim.h}
      viewBox="0 0 320 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {/* Crown centered horizontally (viewBox width 320, center 160) */}
      <g transform="translate(124, 10)">
        {crownPath}
        {crownTriangle}
        {crownDiamond}
      </g>

      {/* DESPERTAR DA centered horizontally at Y=78 */}
      <text
        x="160"
        y="78"
        textAnchor="middle"
        fill={textColorUpper}
        fontSize="17"
        fontWeight="300"
        letterSpacing="0.32em"
        fontFamily="Montserrat, sans-serif"
      >
        DESPERTAR DA
      </text>

      {/* AURORA Stylized vector paths centered horizontally (width 276, offset to center is 22) */}
      <g transform="translate(22, 92)">
        {auroraPaths}
      </g>
    </svg>
  );
};

export default DespertarLogo;
