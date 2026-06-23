import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/1024c77f2_.png';

export default function MedcorpsLogo({ className = '' }) {
  return (
    <img
      src={LOGO_URL}
      alt="Medcorps Espaço da Saúde"
      className={`rounded-xl ${className}`}
      style={{
        imageRendering: 'crisp-edges',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
      decoding="async"
    />
  );
}