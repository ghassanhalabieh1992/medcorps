import React from 'react';
import { motion } from 'framer-motion';

const PLANS = [
  { label: '01 PERÍODO', discount: '-', value: 'R$ 1.300,00' },
  { label: '02 PERÍODOS', discount: '05,00%', value: 'R$ 2.470,00' },
  { label: '03 PERÍODOS', discount: '07,50%', value: 'R$ 3.607,50' },
  { label: '04 PERÍODOS', discount: '10,00%', value: 'R$ 4.680,00' },
];

export default function PricingSection() {
  return (
    <section id="valores" className="scroll-mt-20 py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
            Valores
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6">
            Planos por <span className="italic text-primary">período</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Quanto maior a quantidade de períodos contratados, <strong className="text-foreground">menor</strong> o
            valor unitário de cada período.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          <div className="rounded-2xl bg-[#002C3D] text-white text-center py-6 px-2 font-heading font-semibold text-sm md:text-lg">
            PERÍODOS
          </div>
          <div className="rounded-2xl bg-[#002C3D] text-white text-center py-6 px-2 font-heading font-semibold text-sm md:text-lg">
            DESCONTO
          </div>
          <div className="rounded-2xl bg-[#002C3D] text-white text-center py-6 px-2 font-heading font-semibold text-sm md:text-lg">
            VALOR/MÊS
          </div>

          {PLANS.map((plan) => (
            <React.Fragment key={plan.label}>
              <div className="rounded-2xl bg-[#0F4C63] text-white text-center py-6 px-2 font-body font-medium text-sm md:text-base">
                {plan.label}
              </div>
              <div className="rounded-2xl bg-[#0F4C63]/90 text-white text-center py-6 px-2 font-body font-medium text-sm md:text-base">
                {plan.discount}
              </div>
              <div className="rounded-2xl bg-[#0F4C63] text-white text-center py-6 px-2 font-body font-semibold text-sm md:text-base">
                {plan.value}
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
