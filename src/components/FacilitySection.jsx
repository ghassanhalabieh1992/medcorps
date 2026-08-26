import React from 'react';
import { motion } from 'framer-motion';

const PHOTOS = [
  {
    src: '/images/hero.jpg',
    alt: 'Recepção da Clínica Medcorps',
    title: 'Recepção',
    description: 'Um ambiente acolhedor pensado para receber você com conforto desde a chegada.',
  },
  {
    src: '/images/reception-desk.jpg',
    alt: 'Balcão de atendimento',
    title: 'Atendimento',
    description: 'Balcão de atendimento pronto para orientar e agendar sua consulta com atenção.',
  },
  {
    src: '/images/exam-room.jpg',
    alt: 'Sala de consulta',
    title: 'Sala de Consulta',
    description: 'Espaço equipado para exames e consultas com privacidade e conforto.',
  },
  {
    src: '/images/doctor-office.jpg',
    alt: 'Consultório médico',
    title: 'Consultório Médico',
    description: 'Ambiente reservado para um atendimento próximo e humanizado.',
  },
];

export default function FacilitySection() {
  return (
    <section id="estrutura" className="scroll-mt-20 py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6">
            Um espaço pensado para o seu <span className="italic text-primary">conforto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Ambientes acolhedores e bem equipados, do primeiro atendimento à recepção
            até as salas de consulta.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group rounded-3xl overflow-hidden aspect-[3/4] shadow-lg shadow-primary/5 mb-4">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-foreground font-heading font-semibold text-base mb-1">
                {photo.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {photo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
