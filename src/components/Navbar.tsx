/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, TrendingUp, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../data';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Testimonials', value: 'testimonials' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar */}
      <div id="top-bar" className="bg-[#0F172A] text-gray-200 text-xs py-2 border-b border-gray-800 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center hover:text-amber-400 transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              <a href={`tel:${businessConfig.phoneRaw}`}>{businessConfig.phone}</a>
            </span>
            <span className="flex items-center hover:text-amber-400 transition-colors duration-200">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Wyandanch, NY Local Partner</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShieldCheck className="w-2.5 h-2.5 mr-1" />
              Local & Trusted
            </span>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header id="main-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm leading-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Branding Logo */}
            <div id="nav-brand" className="flex-shrink-0 cursor-pointer flex items-center space-x-2.5" onClick={() => handleNavClick('home')}>
              <div className="w-10 h-10 rounded-[4px] bg-[#2563EB] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-2xl tracking-tight text-[#0F172A] block leading-none">
                  LEVEL UP
                </span>
                <span className="text-[10px] tracking-wider text-[#2563EB] font-bold uppercase mt-1 block font-sans">
                  WYANDANCH, NY
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.value;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`relative px-4 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 hover:text-[#0F172A] hover:bg-gray-50'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-[#0F172A] rounded-[4px] -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Call to Actions */}
            <div id="desktop-actions" className="hidden md:flex items-center space-x-3.5">
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="btn-premium-nav-call inline-flex items-center justify-center h-10 uppercase text-xs tracking-wider font-bold"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-blue-600" />
                Call Now
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-premium-nav-contact inline-flex items-center justify-center h-10 uppercase text-xs tracking-wider font-bold"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div id="mobile-trigger" className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-[#0F172A] hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Toggle Main Menu</span>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = currentPage === item.value;
                  return (
                    <button
                      key={item.value}
                      onClick={() => handleNavClick(item.value)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#2563EB] text-white shadow-sm shadow-blue-500/10'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#0F172A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 mt-4">
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="flex items-center justify-center px-4 py-3 border border-gray-200 text-sm font-semibold rounded-xl text-gray-700 bg-white shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    Call Us
                  </a>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="flex items-center justify-center px-4 py-3 bg-[#0F172A] text-white text-sm font-semibold rounded-xl text-center shadow-sm"
                  >
                    Get Info
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
