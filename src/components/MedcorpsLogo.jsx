import React from 'react';

/**
 * MedcorpsLogo — uses the uploaded bean icon PNG above text.
 * variant: default = cream text #EAE7D6 (dark backgrounds)
 *          'green' = #2C5F2E text (light backgrounds)
 *          'dark'  = #002C3D text
 */
const BEAN_ICON = 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/5b0f178d0_medcorps_icon_only.png';

export default function MedcorpsLogo({ className = '', variant }) {
  const fill = variant === 'green' ? '#2C5F2E'
             : variant === 'dark'  ? '#002C3D'
             :                       '#EAE7D6'; // default cream

  return (
    <svg
      viewBox="0 0 320 210"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Medcorps Espaço da Saúde"
    >
      {/* Bean icon from uploaded file */}
      <image
        href={BEAN_ICON}
        x="116"
        y="14"
        width="88"
        height="88"
      />

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