'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-guardhup-primary rounded flex items-center justify-center text-white">
            🛡️
          </div>
          <span className="text-guardhup-dark">GuardHup</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-guardhup-gray hover:text-guardhup-primary transition">
            Toezicht & Beveiliging op maat
          </Link>
          <Link href="#academy" className="text-guardhup-primary font-semibold">
            Academy
          </Link>
          <Link href="#about" className="text-guardhup-gray hover:text-guardhup-primary transition">
            Over ons
          </Link>
          <Link href="#why" className="text-guardhup-gray hover:text-guardhup-primary transition">
            Waarom GuardHup
          </Link>
          <Link href="#contact" className="text-guardhup-gray hover:text-guardhup-primary transition">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-guardhup-gray hover:text-guardhup-primary transition">
            Inloggen
          </button>
          <button className="bg-guardhup-navy text-white px-6 py-2 rounded-lg hover:bg-guardhup-dark transition">
            Aan de slag
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-guardhup-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="#services" className="text-guardhup-gray hover:text-guardhup-primary transition">
              Toezicht & Beveiliging op maat
            </Link>
            <Link href="#academy" className="text-guardhup-primary font-semibold">
              Academy
            </Link>
            <Link href="#about" className="text-guardhup-gray hover:text-guardhup-primary transition">
              Over ons
            </Link>
            <Link href="#why" className="text-guardhup-gray hover:text-guardhup-primary transition">
              Waarom GuardHup
            </Link>
            <Link href="#contact" className="text-guardhup-gray hover:text-guardhup-primary transition">
              Contact
            </Link>
            <button className="w-full bg-guardhup-navy text-white px-6 py-2 rounded-lg hover:bg-guardhup-dark transition mt-2">
              Aan de slag
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
