'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Academy: React.FC = () => {
  const courses = [
    {
      title: 'Basiscursus Beveiliging',
      duration: '4 weken',
      level: 'Beginners',
      description: 'Leer de fundamentals van professionele beveiliging en veiligheidsprotocollen.'
    },
    {
      title: 'Geavanceerde Beveiligingstechnieken',
      duration: '6 weken',
      level: 'Gevorderd',
      description: 'Verdiep je kennis in moderne beveiligingstechnologie en risicobeheer.'
    },
    {
      title: 'Management & Leadership',
      duration: '8 weken',
      level: 'Professional',
      description: 'Leid beveiligingsteams met vertrouwen en professionele integriteit.'
    }
  ];

  return (
    <section id="academy" className="py-20 bg-guardhup-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-guardhup-dark mb-4">
            GuardHup <span className="text-guardhup-primary">Academy</span>
          </h2>
          <p className="text-xl text-guardhup-gray">
            Professioneel ontwikkelingsprogramma voor beveiligingsexperts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-guardhup-primary text-white text-sm rounded-full">
                  {course.level}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-guardhup-dark mb-2">
                {course.title}
              </h3>
              <p className="text-guardhup-gray mb-4">
                {course.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-guardhup-gray">⏱️ {course.duration}</span>
                <button className="text-guardhup-primary font-semibold hover:text-guardhup-dark transition">
                  Meer info →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;
