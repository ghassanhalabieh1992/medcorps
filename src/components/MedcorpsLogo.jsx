import React from 'react';

/**
 * MedcorpsLogo — SVG bean icon + text, transparent background.
 * variant: default = cream #EAE7D6 (dark backgrounds)
 *          'green' = #2C5F2E (light backgrounds)
 *          'dark'  = #002C3D
 */
export default function MedcorpsLogo({ className = '', variant }) {
  const fill = variant === 'green' ? '#2C5F2E'
             : variant === 'dark'  ? '#002C3D'
             :                       '#EAE7D6';

  return (
    <svg
      viewBox="0 0 320 230"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Medcorps Espaço da Saúde"
    >
      <defs>
        <mask id="bMask">
          <ellipse cx="0" cy="0" rx="69" ry="34" fill="white" />
          <path
            d="M -60,-4 C -35,-24 -5,-2 0,0 C 5,2 35,24 60,4"
            stroke="black"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
        </mask>
      </defs>

      {/* Bean — rotated, close to text */}
      <g transform="translate(160, 105) rotate(-32)">
        <ellipse
          cx="0" cy="0"
          rx="69" ry="34"
          fill={fill}
          mask="url(#bMask)"
        />
      </g>

      {/* MEDCORPS */}
      <text
        x="160"
        y="178"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontWeight="500"
        fontSize="40"
        letterSpacing="5"
        fill={fill}
      >
        MEDCORPS
      </text>

      {/* ESPAÇO DA SAÚDE */}
      <text
        x="160"
        y="202"
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