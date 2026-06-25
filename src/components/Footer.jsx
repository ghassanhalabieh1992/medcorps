import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import MedcorpsLogo from '@/components/MedcorpsLogo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#002C3D] text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <MedcorpsLogo className="h-16 w-auto mb-6" />
            <p className="text-white/50 font-body text-sm leading-relaxed">
              Clínica Medcorps — Espaço da Saúde.<br />
              Cuidado multidisciplinar com excelência e acolhimento em Florianópolis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {['Início', 'Sobre', 'Especialidades', 'Equipe', 'Depoimentos', 'Contato'].map((label) =>
              <a
                key={label}
                href={`#${label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                className="text-white/50 hover:text-white transition-colors font-body text-sm">
                
                  {label}
                </a>
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <p className="text-white/50 text-sm font-body">
                  Av. Rio Branco, 380 — Sala 802<br />
                  Centro, Florianópolis — SC
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+5548999260111" className="text-white/50 hover:text-white transition-colors text-sm font-body">
                  (48) 99926-0111
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:clinicamedcorps2021@gmail.com" className="text-white/50 hover:text-white transition-colors text-sm font-body">
                  clinicamedcorps2021@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="https://www.instagram.com/clinicamedcorpsfloripa?igsh=MTlxNGRrZnp5YjhhZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors text-sm font-body">
                  
                  @clinicamedcorpsfloripa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            © {year} Clínica Medcorps. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs font-body mx-8">
Dr Eduardo Luchini Vieira CRM/SC 7150 RQE 3827
          </p>
        </div>
      </div>
    </footer>);

}