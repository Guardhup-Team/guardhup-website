'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-guardhup-dark mb-6">
              Over <span className="text-guardhup-primary">GuardHup</span>
            </h2>
            <p className="text-lg text-guardhup-gray mb-4 leading-relaxed">
              GuardHup is dé innovatieve beveiliging platform voor Nederland. Sinds 2020 verbinden 
              wij beveiligingsprofessionals met bedrijven en organisaties die professionele beveiliging nodig hebben.
            </p>
            <p className="text-lg text-guardhup-gray mb-6 leading-relaxed">
              Onze missie is simpel: beveiliging te democratiseren en toegankelijk te maken voor bedrijven 
              van alle maten, met transparantie, betrouwbaarheid en efficiëntie.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-guardhup-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-guardhup-dark">500+ Professionals</h4>
                  <p className="text-guardhup-gray">Geverifieerde en betrouwbare beveiligingsprofessionals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-guardhup-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-guardhup-dark">2000+ Klanten</h4>
                  <p className="text-guardhup-gray">Bedrijven die vertrouwen op onze diensten</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-guardhup-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-guardhup-dark">24/7 Support</h4>
                  <p className="text-guardhup-gray">Altijd bereikbaar voor uw veiligheidsvragen</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-guardhup-primary to-guardhup-dark rounded-lg h-96 flex items-center justify-center text-white text-6xl"
          >
            🛡️
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
