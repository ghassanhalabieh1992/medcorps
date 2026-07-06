import React from 'react';

const LOGO_URL = '/images/logo.png';

export default function MedcorpsLogo({ className = '' }) {
  return (
    <img
      src={LOGO_URL}
      alt="Medcorps Espaço da Saúde"
      className={`rounded-xl ${className}`}
    />
  );
}