/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { initialServices } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForContact }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Consulting', 'Development', 'Management', 'Business'];

  const filteredServices = activeCategory === 'All'
    ? initialServices
    : initialServices.filter(s => s.category === activeCategory);

  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-[#2563EB]" />;
    }
    return <Icons.Briefcase className="w-5 h-5 text-[#2563EB]" />;
  };

  return (
    <section id="services-section" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-3 py-1.5 rounded-[4px] border border-[#2563EB]/15">
            Professional Capability Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight uppercase leading-tight">
            Comprehensive Services Tailored for Growth
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Whether scaling a local retail showroom, remodeling operational models, or accelerating personal careers, our structured programs yield immediate returns.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-[#0F172A] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-[4px] p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full relative"
            >
              <div className="absolute top-0 left-0 w-12 h-1 bg-[#2563EB] rounded-t-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-50 rounded-[4px] group-hover:bg-[#2563EB]/10 transition-colors duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors duration-200 uppercase">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Micro checklist features summary */}
                <ul className="space-y-2 pt-2 border-t border-gray-100">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start text-xs text-gray-600">
                      <Icons.CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card triggers */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1E40AF] transition-colors duration-200 flex items-center group/btn uppercase tracking-wider"
                >
                  Explore Details
                  <Icons.ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </button>
                <button
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="px-4.5 py-2.5 bg-slate-100 hover:bg-[#2563EB] text-slate-700 hover:text-white text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all duration-200 shadow-sm"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights Grid section */}
        <div className="mt-20 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-[4px] p-8 sm:p-12 shadow-xl border border-gray-800 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[#F59E0B] font-mono text-xs font-bold uppercase tracking-widest block">Why Client Operators Pick Level Up</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-tight">Need a custom strategic or tech architecture?</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If your business requirements fall outside our standard packages, we customize comprehensive solutions including data structure audit, workflow integrations, and full-stack local presence channels.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={() => onSelectServiceForContact('Custom Enterprise Solutions')}
                className="px-6 py-3.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all duration-200 shadow-lg"
              >
                Outline Your Requirements
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Expandable Service Details Lightbox Dialog */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-[#0F172A]"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-white rounded-[4px] w-full max-w-2xl p-6 sm:p-8 shadow-2xl z-10 border border-[#E2E8F0] max-h-[90vh] overflow-y-auto leading-none"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <Icons.X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center space-x-3.5 pb-2">
                  <div className="p-3 bg-blue-50 rounded-[4px]">
                    {getIcon(selectedService.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block">
                      {selectedService.category} Service
                    </span>
                    <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight block mt-1 uppercase">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">Overview</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedService.longDesc}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest font-mono">Key High-Value Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-700 bg-slate-50 p-3 rounded-[4px] border border-slate-100">
                        <Icons.Check className="w-4 h-4 text-[#2563EB] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-[4px] text-center"
                  >
                    Close Panel
                  </button>
                  <button
                    onClick={() => {
                      onSelectServiceForContact(selectedService.title);
                      setSelectedService(null);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] text-xs font-bold uppercase tracking-wider rounded-[4px] text-center shadow-md"
                  >
                    Get Info & Apply
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
