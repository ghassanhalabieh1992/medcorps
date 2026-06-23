import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/f3d994f5c_.png';

export default function MedcorpsLogo({ className = '', variant }) {
  return (
    <img
      src={LOGO_URL}
      alt="Medcorps Espaço da Saúde"
      className={className}
    />
  );
}