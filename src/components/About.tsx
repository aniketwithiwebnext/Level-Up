/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Target, Users, Award, ShieldAlert, Sparkles, Building2 } from 'lucide-react';
import { businessConfig } from '../data';

export default function About() {
  return (
    <section id="about-section" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Intro Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[4px] bg-[#F59E0B]/10 text-[#0F172A] border border-[#F59E0B]/20 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Proudly Rooted in Wyandanch, Long Island</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight leading-tight uppercase">
                Empowering Communities by Helping Businesses Level Up
              </h2>
              <p className="text-[#2563EB] text-lg font-semibold font-sans">
                A localized advisory agency built on integrity, expert strategic planning, and modern visibility engines.
              </p>
            </div>

            <p className="text-gray-600 font-sans leading-relaxed">
              At **Level Up**, we believe that sustainable success isn’t achieved by chance — it is built through rigorous systems design, targeted career developments, and local brand prominence. Based in the heart of Wyandanch, NY, we specialize in helping local service providers, small business ventures, and hard-working professionals in Suffolk County maximize their commercial potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-[4px] border border-slate-200">
                <Target className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Core Mission</h4>
                  <p className="text-xs text-gray-500 mt-1">To bridge resource gaps, deliver professional coaching, and deploy SEO growth for local ventures.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-[4px] border border-slate-200">
                <Users className="w-5 h-5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Customer Focus</h4>
                  <p className="text-xs text-gray-500 mt-1">Providing personalized attention, transparent outcomes, and uncompromised support for Long Island.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-blue-500/5 rounded-[4px] blur-2xl transform translate-x-4 translate-y-4" />
              
              {/* Local Highlight Card */}
              <div className="relative bg-white rounded-[4px] border border-[#E2E8F0] p-8 sm:p-10 shadow-lg space-y-8 leading-none">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F59E0B]/10 text-[#F59E0B] rounded-[4px] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-bold tracking-wider block font-mono">ESTABLISHED PARTNERSHIP</span>
                    <h3 className="text-xl font-extrabold text-[#0F172A] mt-1 block">Level Up Operations</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Wyandanch Plaza & Straight Path</p>
                      <p className="text-xs text-gray-400 mt-1">Conveniently located near the LIRR station transit corridor of Wyandanch, NY.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Award className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">100% Client Quality Guarantee</p>
                      <p className="text-xs text-gray-400 mt-1">If your business doesn’t see significant system improvements during our 90-day onboarding, we audit your channels for free.</p>
                    </div>
                  </div>
                </div>

                {/* Local highlight banner */}
                <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/20 p-4 rounded-[4px] text-xs text-[#0F172A]">
                  <p className="font-bold flex items-center mb-1 text-amber-800">
                    <ShieldAlert className="w-4 h-4 text-amber-600 mr-2" />
                    Local New York Advisory Spotlight
                  </p>
                  As active partners in Wyandanch's community revitalization, we support municipal and independent business growth initiatives to accelerate local career pipelines.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars / Values Section */}
        <div className="bg-slate-50 rounded-[4px] p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">Our Core Operational Values</h3>
            <p className="text-sm text-gray-600 mt-2">Every consultant at Level Up acts with strict adherence to these guiding priorities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              {
                title: 'High-Impact Authenticity',
                desc: 'We do not sell pre-fabricated growth hacks. We analyze raw operation metrics, map realistic competitors, and deploy blueprints that yield actual value.',
                accent: 'text-blue-600',
                bg: 'bg-blue-500/5'
              },
              {
                title: 'Unfailing Reliability',
                desc: 'We respect your team’s timelines, confidentiality, and capital targets. You can rely on consistent updates, direct response lines, and absolute clarity.',
                accent: 'text-[#F59E0B]',
                bg: 'bg-amber-500/5'
              },
              {
                title: 'Community Empowerment',
                desc: 'By scaling local retail, dental clinics, general contractors, or services in Wyandanch, we support job growth and wealth preservation in Babylon township.',
                accent: 'text-teal-600',
                bg: 'bg-teal-500/5'
              }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-[4px] ${value.bg} ${value.accent} font-bold text-sm`}>
                  {i + 1}
                </span>
                <h4 className="text-base font-bold text-[#0F172A] uppercase tracking-wider">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
