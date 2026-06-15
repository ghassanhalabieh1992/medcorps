import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/6c6121c9d_generated_2163423f.png"
          alt="Florianópolis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#002C3D]/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white leading-tight mb-6">
          Sua saúde merece o{' '}
          <span className="italic text-accent">melhor cuidado</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto">
          Agende sua consulta e descubra o atendimento diferenciado da Clínica Medcorps. 
          Estamos prontos para cuidar de você.
        </p>
        <a
          href="https://wa.me/554830244200?text=Olá! Gostaria de agendar uma consulta na Medcorps."
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 rounded-full text-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
        >
          Agendar Agora
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}