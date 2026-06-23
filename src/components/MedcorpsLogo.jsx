import React from 'react';

/**
 * MedcorpsLogo — SVG inline, transparent background.
 * Matches the official logo: a rotated bean shape with wavy S-split.
 *
 * variant: default = cream #EAE7D6 (for dark backgrounds)
 *          'green' = #2C5F2E (for light backgrounds)
 *          'dark'  = #002C3D (alternative dark)
 *          'light' = #F5F0E8 (for very dark backgrounds)
 */
export default function MedcorpsLogo({ className = '', variant }) {
  const fill = variant === 'green' ? '#2C5F2E'
             : variant === 'dark'  ? '#002C3D'
             : variant === 'light' ? '#F5F0E8'
             :                       '#EAE7D6'; // default cream

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
          {/* Bean body — white = visible */}
          <ellipse cx="0" cy="0" rx="74" ry="38" fill="white" />
          {/* Wavy S-curve cut through center — black = transparent */}
          <path
            d="M -64,-5 C -38,-24 -5,-3 0,0 C 5,3 38,24 64,5"
            stroke="black"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
        </mask>
      </defs>

      {/* Rotated bean with mask */}
      <g transform="translate(160, 74) rotate(-32)">
        <ellipse
          cx="0" cy="0"
          rx="74" ry="38"
          fill={fill}
          mask="url(#beanMask)"
        />
      </g>

      {/* MEDCORPS — elegant serif */}
      <text
        x="160"
        y="160"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="500"
        fontSize="40"
        letterSpacing="5"
        fill={fill}
      >
        MEDCORPS
      </text>

      {/* ESPAÇO DA SAÚDE — wide sans-serif */}
      <text
        x="160"
        y="185"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="300"
        fontSize="11"
        letterSpacing="6"
        fill={fill}
      >
        ESPAÇO DA SAÚDE
      </text>
    </svg>
  );
}