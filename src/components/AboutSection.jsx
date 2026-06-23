import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Shield } from 'lucide-react';

const STATS = [
  { icon: Heart, value: 'Multidisciplinar', label: 'Cuidado Integral' },
  { icon: Users, value: '13+', label: 'Especialidades' },
  { icon: Award, value: '22 Anos', label: 'Experiência' },
  { icon: Shield, value: 'CRM/SC', label: 'Certificada' },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/ad6027030_generated_8e590d4e.png"
                alt="Consulta médica na Medcorps"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C3D]/20 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px]">
              <p className="text-accent font-heading text-4xl font-semibold">+22</p>
              <p className="text-muted-foreground text-sm font-body mt-1">Anos cuidando de você em Florianópolis</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
              Sobre a Medcorps
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6 leading-tight">
              Seu bem-estar é nossa{' '}
              <span className="italic text-primary">prioridade</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-body">
              Buscando oferecer saúde e bem-estar, a clínica Medcorps atua há mais de 22 anos 
              no Centro de Florianópolis. Com o propósito de oferecer um tratamento para disposição 
              física e mental dos nossos pacientes, a policlínica desenvolveu uma equipe com 
              profissionais de diversas áreas, da medicina tradicional a terapias alternativas 
              e/ou complementares. Dessa forma, nossos clientes encontram um tratamento amplo 
              em um só lugar.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-body">
              A Clínica Medcorps é uma clínica Multidisciplinar composta por equipes 
              multiprofissionais de médicos, nutricionistas, fisioterapeutas, psicólogos, 
              hipnólogo entre outras especialidades que buscam atender o paciente de uma forma 
              mais humanizada e empática, com o intuito de olhar o paciente de vários ângulos, 
              ou seja, de uma maneira integrada.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-heading text-xl font-semibold">{value}</p>
                    <p className="text-muted-foreground text-sm font-body">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}