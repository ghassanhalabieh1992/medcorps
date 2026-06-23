import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase font-body">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mt-4 mb-6">
            Venha nos <span className="italic text-primary">visitar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Estamos no centro de Florianópolis, com fácil acesso e estacionamento próximo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground font-body">
                    Av. Rio Branco, 380 — Sala 802<br />
                    Edifício Barra Sul — Centro<br />
                    Florianópolis, SC — 88015-204
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Telefone</h3>
                  <a href="tel:+554830244200" className="text-muted-foreground hover:text-primary transition-colors font-body">
                    (48) 3024-4200
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground font-body">
                    Segunda a Sexta: 8h — 18h
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/554830244200?text=Olá! Gostaria de agendar uma consulta na Medcorps."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-primary-foreground px-6 py-4 rounded-full text-center font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Agendar via WhatsApp
              </a>
              <a
                href="https://www.instagram.com/clinicamedcorpsfloripa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-border px-6 py-4 rounded-full text-center font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-full min-h-[400px] border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5!2d-48.5544816!3d-27.5922641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527383ce1f37945%3A0xc67dcd2dee007a98!2sCl%C3%ADnica%20Medcorps!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Clínica Medcorps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}