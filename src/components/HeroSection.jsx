import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/79cdcef76_generated_c2aeb314.png"
          alt="Interior da Clínica Medcorps"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#002C3D]/85 via-[#002C3D]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:pt-28 lg:pb-16 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center">
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
              
              <span className="text-accent tracking-[0.2em] uppercase font-medium text-lg [font-family:'Abril_Fatface',_system-ui]">CLÍNICA MEDCORPS

              </span>
            </div>
            <p className="mt-3 text-white/60 text-xs font-body tracking-[0.35em] uppercase">
              Espaço da Saúde
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8">
            
            <MapPin className="w-4 h-4 text-white/50" />
            <span className="text-white/60 text-sm font-body tracking-wider uppercase">
              Florianópolis · Santa Catarina
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-white leading-[1.1] mb-6">
            
            Seu espaço de{' '}
            <span className="italic text-accent">saúde</span>{' '}
            e bem-estar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 font-body font-light leading-relaxed mb-10 max-w-lg">
            
            Cuidado multidisciplinar com excelência e acolhimento. 
            Uma equipe dedicada à sua saúde integral em Florianópolis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row justify-center gap-4">
            
            <a
              href="https://wa.me/5548999260111?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-3 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
              
              Agendar Consulta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#especialidades"
              className="text-white/80 px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-3 border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300">
              
              Nossas Especialidades
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        
        





        
      </motion.div>
    </section>);

}