import React from 'react';

/**
 * MedcorpsLogo — SVG inline, transparent background
 * variant: 'green' (default) | 'light' (white, for dark backgrounds) | 'dark'
 */
export default function MedcorpsLogo({ className = '', variant = 'green' }) {
  const fill = variant === 'light' ? '#F5F0E8'
             : variant === 'dark'  ? '#002C3D'
             :                       '#2C5F2E';

  const bgCut = variant === 'light' ? '#002C3D'
              : variant === 'dark'  ? '#F7F9FB'
              :                       'transparent'; // will use SVG mask trick

  return (
    <svg
      viewBox="0 0 320 210"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Medcorps Espaço da Saúde"
    >
      <defs>
        <mask id="beanMask">
          {/* White = visible, black = cut out */}
          <ellipse cx="160" cy="72" rx="82" ry="56" fill="white" />
          {/* Diagonal stripe cut */}
          <path
            d="M 68,100 L 242,44"
            stroke="black"
            strokeWidth="20"
            strokeLinecap="butt"
          />
        </mask>
      </defs>

      {/* Bean shape with diagonal stripe cut via mask */}
      <ellipse
        cx="160" cy="72"
        rx="82" ry="56"
        fill={fill}
        mask="url(#beanMask)"
      />
      {/* Re-draw two solid halves to create the bean split look */}
      <g mask="url(#beanMask)">
        <ellipse cx="160" cy="72" rx="82" ry="56" fill={fill} />
      </g>

      {/* MEDCORPS */}
      <text
        x="160"
        y="162"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="500"
        fontSize="42"
        letterSpacing="5"
        fill={fill}
      >
        MEDCORPS
      </text>

      {/* ESPAÇO DA SAÚDE */}
      <text
        x="160"
        y="185"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="300"
        fontSize="11.5"
        letterSpacing="5.5"
        fill={fill}
      >
        ESPAÇO DA SAÚDE
      </text>
    </svg>
  );
}