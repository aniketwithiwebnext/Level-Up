/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, ShieldCheck, Mail, Sparkles, Star } from 'lucide-react';
import { businessConfig } from '../data';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section id="hero" className="relative bg-[#0F172A] text-white pt-16 pb-24 md:py-32 overflow-hidden">
      {/* Visual background vector accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-3xl transform translate-x-12 -translate-y-12" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/5 blur-3xl transform -translate-x-12 translate-y-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content panel */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tag badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] bg-[#2563EB]/15 text-white border border-[#2563EB]/25 text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]/20" />
              <span>Premium Business Operations • Wyandanch, NY</span>
            </motion.div>

            {/* Core Display Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-tight tracking-tight uppercase"
            >
              Level Up Your <span className="text-[#2563EB] relative inline-block">
                Success
                <span className="absolute bottom-1.5 left-0 w-full h-1 bg-[#F59E0B]" />
              </span>
            </motion.h1>

            {/* Supportive Paragraph Content */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We provide professional business coaching, local SEO marketing operations, and strategic management consultation in Wyandanch and across Long Island. Partner with a trusted team dedicated to absolute reliability, visual excellence, and measurable growth.
            </motion.p>

            {/* Comprehensive trust metrics check list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left"
            >
              {[
                '1-on-1 Strategic Consulting',
                'Hyper-Local SEO Power',
                'Commitment to Excellence'
              ].map((perf, i) => (
                <div key={i} className="flex items-center space-x-2.5 text-sm text-slate-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 text-[#F59E0B] flex items-center justify-center flex-shrink-0 border border-[#F59E0B]/30">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <span>{perf}</span>
                </div>
              ))}
            </motion.div>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="w-full sm:w-auto btn-premium-primary text-center"
              >
                Call Now
              </a>
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full sm:w-auto btn-premium-secondary text-center"
              >
                Request Information
              </button>
            </motion.div>
          </div>

          {/* Graphical/Illustrative Promo Display Panel */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#2563EB] to-amber-500 rounded-2xl blur opacity-25" />

              {/* High-Impact Interactive Business Status Shell */}
              <div className="relative bg-gradient-to-b from-gray-900 to-[#1E293B] text-white rounded-2xl p-6 shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
                {/* Embedded tech wireframes inside card */}
                <div className="absolute right-0 top-0 w-32 h-32 opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    Metrics Active
                  </span>
                </div>

                <div className="space-y-6 my-6 pointer-events-none">
                  <div>
                    <span className="text-xs font-semibold text-gray-400 block uppercase tracking-widest mb-1.5">Primary Target Focus</span>
                    <span className="text-xl sm:text-2xl font-bold font-sans tracking-tight text-white block">
                      Wyandanch SEO & Consulting
                    </span>
                  </div>

                  {/* Growth charts simulated with pure elegant CSS */}
                  <div className="space-y-3.5 bg-gray-950/50 p-4.5 rounded-xl border border-gray-800">
                    <div className="flex justify-between text-xs font-mono font-medium">
                      <span className="text-gray-400">Google Maps Ranking</span>
                      <span className="text-amber-400 font-bold">Top 3 Guarantee</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full w-[94%]" />
                    </div>

                    <div className="flex justify-between text-xs font-mono font-medium pt-1">
                      <span className="text-gray-400">Client Operations Scaled</span>
                      <span className="text-blue-400 font-bold">+184% Avg Growth</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-amber-500 h-full rounded-full w-[86%]" />
                    </div>
                  </div>
                </div>

                {/* Foot indicators */}
                <div className="flex justify-between items-center border-t border-gray-800 pt-4 text-xs font-medium text-gray-400">
                  <div className="flex items-center space-x-1.5 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-white ml-1 font-semibold">5.0 Star Rated</span>
                  </div>
                  <span className="text-xs">Wyandanch Partner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
