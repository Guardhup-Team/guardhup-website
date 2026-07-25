'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: '✓',
      title: 'Geverifieerd',
      description: 'Alle beveiligingsprofessionals worden zorgvuldig geverifieerd en beoordeeld.'
    },
    {
      icon: '🛡️',
      title: 'Betrouwbaar',
      description: 'Transparante communicatie en directe afhandeling van uw veiligheidsvragen.'
    },
    {
      icon: '⚡',
      title: 'Efficiënt',
      description: 'Snelle responstijd en directe inzet van beveiligingsprofessionals op uw locatie.'
    },
    {
      icon: '📊',
      title: 'Real-time Monitoring',
      description: 'Live tracking en monitoring van alle beveiligingsactiviteiten op uw locatie.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-guardhup-dark mb-4">
            Waarom GuardHup kiezen?
          </h2>
          <p className="text-xl text-guardhup-gray">
            Professionele beveiliging, op maat en zonder gedoe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-guardhup-light rounded-lg hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-guardhup-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-guardhup-gray">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
