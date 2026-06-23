import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/c41b99488_medcorps_blue2.png';

export default function MedcorpsLogo({ className = '' }) {
  return (
    <div className={`inline-flex rounded-xl overflow-hidden ${className}`}>
      <img
        src={LOGO_URL}
        alt="Medcorps Espaço da Saúde"
        className="h-full w-auto"
      />
    </div>
  );
}