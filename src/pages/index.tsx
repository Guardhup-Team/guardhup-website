import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Academy from '@/components/Academy';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>GuardHup - De slimste manier om beveiliging te regelen</title>
        <meta name="description" content="GuardHup verbindt beveiligingsprofessionals met opdrachtgevers. Geverifieerd, betrouwbaar en efficiënt." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Hero />
      <Features />
      <Academy />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
