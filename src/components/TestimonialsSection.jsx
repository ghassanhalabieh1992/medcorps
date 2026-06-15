import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Iany',
    text: 'Se você está em dúvida, simplesmente vá tranquilo! Minha melhor experiência de consulta médica na vida. A Dra. Manu é totalmente diferenciada pelo olhar integrativo e medicina preventiva. Escuta ativa, acolhedora, explicação didática.',
    doctor: 'Dra. Manuela Rodrigues Nascimento',
    rating: 5,
  },
  {
    name: 'Flávia',
    text: 'Minha ginecologista há 10 anos. Acompanhou minhas duas gestações e acompanha meu DIU. Muito atenciosa e gentil. Ouve com atenção, sempre atenta aos detalhes. Uma pessoa incrível e profissional maravilhosa.',
    doctor: 'Dra. Gisela Traut Kirst',
    rating: 5,
  },
  {
    name: 'Adriana Kopper',
    text: 'A doutora trabalha numa linha que me agrada muito. Olhar para o paciente, ouvir o paciente, e ver o paciente como um ser inteiro. Tem empatia, e tem amor pelo que faz. Dá pra sentir.',
    doctor: 'Dra. Manuela Rodrigues Nascimento',
    rating: 5,
  },
  {
    name: 'Katheryne',
    text: 'Uma das melhores médicas que já fui! Super humana, atenciosa, tenta entender a fundo o problema do paciente. Uma anamnese perfeita. Estou muito animada em começar meu tratamento.',
    doctor: 'Dra. Manuela Rodrigues Nascimento',
    rating: 5,
  },
  {
    name: 'Barbara Medeiros',
    text: 'Ótimo profissional, foi super pontual e atencioso, tirou todas as minhas dúvidas na consulta. Super recomendo!',
    doctor: 'Dr. Rômulo Herkenhoff',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6">
            O que dizem nossos <span className="italic text-primary">pacientes</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-3xl p-8 md:p-12 lg:p-16 min-h-[320px] flex flex-col justify-center">
            <Quote className="w-12 h-12 text-primary/15 absolute top-8 left-8 md:top-12 md:left-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-lg md:text-xl font-body leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-foreground font-heading text-xl font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm font-body mt-1">
                    Paciente de {testimonial.doctor}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-muted-foreground text-sm font-body">
                {current + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}