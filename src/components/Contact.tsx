'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-guardhup-light">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-guardhup-dark mb-4 text-center">
            Neem contact op
          </h2>
          <p className="text-xl text-guardhup-gray text-center mb-12">
            Heeft u vragen? Wij helpen u graag verder.
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-guardhup-dark font-semibold mb-2">Naam</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-guardhup-primary transition"
                  placeholder="Uw naam"
                  required
                />
              </div>
              <div>
                <label className="block text-guardhup-dark font-semibold mb-2">E-mailadres</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-guardhup-primary transition"
                  placeholder="uw@email.com"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-guardhup-dark font-semibold mb-2">Telefoonnummer</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-guardhup-primary transition"
                placeholder="+31 6 ..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-guardhup-dark font-semibold mb-2">Bericht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-guardhup-primary transition h-32 resize-none"
                placeholder="Uw bericht..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-guardhup-navy hover:bg-guardhup-dark text-white font-semibold py-3 rounded-lg transition transform hover:scale-105"
            >
              Bericht verzenden
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
