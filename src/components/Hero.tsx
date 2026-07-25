'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-guardhup-light to-white pt-32 pb-20 px-4">
      <motion.div 
        className="container max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-gray-100 text-guardhup-gray rounded-full text-sm font-medium">
            BEVEILIGING PLATFORM NL
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          De slimste manier om <span className="text-guardhup-primary">beveiliging</span> te regelen
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-xl text-guardhup-gray mb-10 leading-relaxed max-w-2xl"
        >
          GuardHup verbindt beveiligingsprofessionals met opdrachtgevers. Geverifieerd, betrouwbaar en efficiënt. 
          Heeft u toezicht nodig op uw locatie? Dat regelen wij ook — direct en zonder gedoe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4"
        >
          <button className="bg-guardhup-navy hover:bg-guardhup-dark text-white font-semibold px-8 py-4 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
            Gratis starten →
          </button>
          <button className="border-2 border-guardhup-gray text-guardhup-dark hover:border-guardhup-primary hover:text-guardhup-primary font-semibold px-8 py-4 rounded-lg transition">
            Inloggen
          </button>
        </motion.div>

        {/* Chat Icon */}
        <motion.div 
          variants={itemVariants}
          className="fixed bottom-8 right-8"
        >
          <div className="w-16 h-16 bg-guardhup-primary rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-xl cursor-pointer transition transform hover:scale-110">
            💬
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
