import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/f3d994f5c_.png';

/**
 * MedcorpsLogo — static PNG with light page-background wrapper.
 * On light backgrounds blend naturally; on dark backgrounds the
 * wrapper acts as a badge keeping the logo legible.
 */
export default function MedcorpsLogo({ className = '' }) {
  return (
    <div
      className={`inline-flex rounded-2xl overflow-hidden ${className}`}
      style={{ backgroundColor: 'hsl(210, 33%, 97%)' }}
    >
      <img
        src={LOGO_URL}
        alt="Medcorps Espaço da Saúde"
        className="h-full w-auto"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
}