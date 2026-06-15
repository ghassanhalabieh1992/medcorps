import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Brain, Baby, Smile, HeartPulse, Pill
} from 'lucide-react';

const SPECIALTIES = [
  {
    icon: Pill,
    name: 'Acupuntura Médica',
    description: 'Tratamento complementar com técnicas milenares para alívio de dores e promoção do equilíbrio corporal.',
  },
  {
    icon: HeartPulse,
    name: 'Endocrinologia',
    description: 'Diagnóstico e tratamento de distúrbios hormonais, tireoide, diabetes e metabolismo.',
  },
  {
    icon: Baby,
    name: 'Ginecologia e Obstetrícia',
    description: 'Acompanhamento integral da saúde feminina, pré-natal e saúde reprodutiva.',
  },
  {
    icon: Smile,
    name: 'Odontologia',
    description: 'Cuidados com a saúde bucal, tratamentos estéticos e reabilitação oral.',
  },
  {
    icon: Brain,
    name: 'Psicologia',
    description: 'Suporte emocional e terapia para o bem-estar mental e qualidade de vida.',
  },
  {
    icon: Stethoscope,
    name: 'Psiquiatria',
    description: 'Tratamento especializado de transtornos mentais com abordagem humanizada.',
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6">
            Cuidado <span className="italic text-primary">multidisciplinar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Nossa clínica reúne diversas especialidades para oferecer um atendimento 
            completo e integrado à sua saúde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec, index) => (
            <motion.div
              key={spec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-border/50"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <spec.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {spec.name}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-[15px]">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}