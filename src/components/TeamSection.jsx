import React from 'react';
import { motion } from 'framer-motion';

const TEAM = [
  {
    name: 'Dra. Cassia Schlickmann',
    specialty: 'Dermatologista · CRM 7165/SC',
    description: 'Tenho grande experiência em dermatologia! Atuo nas áreas de estética, doenças de pele, cirurgias e câncer de pele. Procuro sempre atender os meus pacientes como um todo, compreendendo os reais motivos que o levaram a me procurar. Atenção, cuidado e muito amor no que faço!',
    image: 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/1bcc4772e_WhatsAppImage2026-06-25at114435AM.jpg',
  },
  {
    name: 'Dra. Gisela Traut Kirst',
    specialty: 'Ginecologia e Obstetrícia',
    description: 'Profissional dedicada à saúde feminina com mais de uma década de experiência em acompanhamento gestacional.',
    image: 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/08362f2cc_generated_707268dd.png',
  },
  {
    name: 'Dr. Eduardo Vieira',
    specialty: 'Psiquiatria · CRM 7150/SC · RQE 3827',
    description: 'Com grande experiência clínica e uma abordagem centrada no paciente, o Dr. Eduardo vê cada indivíduo em sua singularidade, não tratando apenas os sintomas, buscando entender as raízes das questões, colaborando para uma saúde mental adequada e duradoura.',
    image: 'https://media.base44.com/images/public/6a2feb0cde2056469cbfde93/89d4f0002_WhatsAppImage2026-06-25at114041AM.jpg',
  },
];

export default function TeamSection() {
  return (
    <section id="equipe" className="scroll-mt-20 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6">
            Profissionais que <span className="italic text-primary">acolhem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Conheça os especialistas que fazem da Medcorps uma referência em 
            cuidado humanizado em Florianópolis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002C3D]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/80 text-sm font-body tracking-wider uppercase">
                    {member.specialty}
                  </p>
                </div>
              </div>
              {member.name && (
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2 text-center">
                  {member.name}
                </h3>
              )}
              <p className="text-muted-foreground text-[15px] font-body leading-relaxed text-center">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}