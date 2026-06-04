/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import OwnerPortal from './components/OwnerPortal';
import { businessConfig } from './data';
import { Sparkles, Phone, ArrowRight, Star, Quote, Building2, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Callback helper for requesting a specific service
  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            {/* 1. HERO SECTION */}
            <Hero setCurrentPage={setCurrentPage} />

            {/* 2. VALUE PROPOSITION SPECS */}
            <section className="bg-slate-50 py-12 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                  {[
                    { number: '100%', title: 'Customer Satisfaction', desc: 'Wyandanch priority' },
                    { number: '24/7', title: 'Advisory Access', desc: 'Instant response paths' },
                    { number: '90-Day', title: 'Onboarding Guarantee', desc: 'No-risk operations' },
                    { number: 'Top 3', title: 'Local Google Ranking', desc: 'Maps visibility priority' }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 bg-white rounded-[4px] border border-gray-150 shadow-sm">
                      <span className="text-2xl sm:text-3xl font-black text-[#2563EB] font-sans block">{stat.number}</span>
                      <span className="text-xs font-bold text-slate-800 block mt-1 uppercase tracking-wider">{stat.title}</span>
                      <span className="text-[10px] text-gray-500 block mt-0.5 font-mono">{stat.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. FEATURED SERVICES IN BRIEF */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1.5 rounded-[4px] border border-blue-100 inline-block">
                    ✦ Core Solutions
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">
                    Engineered to Accelerate Your Success
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Explore high-value programs designed to drive brand prominence, improve company workflow systems, and secure personal milestones.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 leading-none">
                  {[
                    {
                      title: 'Operations Consulting',
                      desc: 'Strategic audits, team restructure workflows, resource mapping blueprints, and milestone assessments.',
                      icon: <Building2 className="w-5 h-5 text-[#2563EB]" />,
                      tag: 'Strategic'
                    },
                    {
                      title: 'Local SEO Visibility',
                      desc: 'Google Business profile optimization, map citation audits, and targeted organic campaigns in Babylon Township.',
                      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
                      tag: 'Growth'
                    },
                    {
                      title: 'Career Remodeling',
                      desc: 'Certified resume re-writing, interview mastery frameworks, and leadership development workshops.',
                      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
                      tag: 'Career'
                    }
                  ].map((box, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-[4px] p-6.5 flex flex-col justify-between group hover:bg-white hover:shadow-xl hover:border-gray-150 transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="p-3 bg-white rounded-[4px] shadow-sm group-hover:bg-blue-50 transition-colors">
                            {box.icon}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono">{box.tag}</span>
                        </div>
                        <h3 className="text-lg font-bold text-[#0F172A] uppercase tracking-wide">{box.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{box.desc}</p>
                      </div>
                      <button
                        onClick={() => {
                          setCurrentPage('services');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center text-xs font-bold text-[#2563EB] hover:text-[#1E40AF] mt-5 self-start group/btn uppercase tracking-wider font-sans"
                      >
                        Explore Service Specs
                        <ArrowRight className="w-3" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12 bg-gray-50 border border-gray-100 p-5 rounded-[4px]">
                  <p className="text-sm text-gray-600 font-medium">
                    Want to see our comprehensive four-fold program catalogue?{' '}
                    <button
                      onClick={() => {
                        setCurrentPage('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[#2563EB] hover:underline font-bold uppercase text-xs tracking-wider"
                    >
                      View All Services Catalog &rarr;
                    </button>
                  </p>
                </div>
              </div>
            </section>

            {/* 4. LOCAL COMMUNITY REVITALIZATION BLOCK */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest block">Local Wyandanch Connection</span>
                    <h2 className="text-3xl font-extrabold tracking-tight">Proudly Anchored in Babylon Township, New York</h2>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      We believe a community’s prosperity is fueled by the strength of its local independent operators. Level Up operates right here in **Wyandanch, NY**, tailoring modern marketing visibility models, operational consultations, and business scaling guidelines specifically for regional service provider networks.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-xs font-semibold pt-2">
                      <div className="flex items-center space-x-2.5">
                        <MapPin className="w-4 h-4 text-[#2563EB]" />
                        <span>Located near Wyandanch Transit Hub</span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Active Suffolk County Partnership</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-850 p-6 rounded-[4px] border border-slate-800 space-y-6 leading-none">
                    <span className="text-[10px] text-amber-400 font-bold tracking-wider uppercase block">✦ Corporate Inbound Link</span>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400 uppercase tracking-wider text-[11px]">Head Office Telephone:</span>
                        <a href={`tel:${businessConfig.phoneRaw}`} className="text-sm font-bold text-white hover:text-[#2563EB] transition-colors">{businessConfig.phone}</a>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                        <span className="text-xs text-slate-400 uppercase tracking-wider text-[11px]">Consultation Email:</span>
                        <a href={`mailto:${businessConfig.email}`} className="text-xs font-bold text-white hover:text-[#2563EB] transition-colors hover:underline truncate max-w-[200px]">{businessConfig.email}</a>
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                        <span className="text-xs text-slate-400 uppercase tracking-wider text-[11px]">Standard Office Hours:</span>
                        <span className="text-xs text-white">Mon - Sat: 8am - 6pm</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setCurrentPage('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2.5 bg-[#2563EB] hover:bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider rounded-[4px] transition-colors text-center shadow-lg cursor-pointer"
                    >
                      Book In-Person Consultation
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TESTIMONIAL PREVIEW */}
            <section className="bg-slate-50 py-20 border-t border-slate-150">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] block">Verification Records</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">What Trusted Partners Say</h2>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentPage('testimonials');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#2563EB] hover:underline uppercase tracking-wider"
                  >
                    Read All Success Records &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-none">
                  {[
                    {
                      name: 'Marcus Vance',
                      role: 'Managing Partner',
                      company: 'East End Automotive',
                      content: 'Level Up completely revitalized our local operation. Their strategic consulting identified bottlenecks we were blind to, boosting our workflow efficiency by 35% in three months. Highly recommended for any Long Island business looking to scale!',
                      stars: 5
                    },
                    {
                      name: 'Darnell Carter',
                      role: 'Founder',
                      company: 'Carter Custom Renovation',
                      content: 'Our Google Business visibility was static until Level Up optimized our profile. We went from 2-3 inquiries a week to almost daily high-value inbound calls directly from people searching in Wyandanch and Babylon.',
                      stars: 5
                    }
                  ].map((rev, idx) => (
                    <div key={idx} className="bg-white rounded-[4px] p-6 border border-gray-150 shadow-sm flex flex-col justify-between h-full group hover:shadow-md transition-shadow">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex text-amber-500">
                            {[...Array(rev.stars)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
                            ))}
                          </div>
                          <Quote className="w-5 h-5 text-slate-100" />
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed italic">"{rev.content}"</p>
                      </div>
                      <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-gray-100">
                        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs uppercase flex-shrink-0">
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0F172A] block uppercase tracking-wider">{rev.name}</h4>
                          <span className="text-[10px] text-gray-400 block mt-0.5">{rev.role}, <span className="font-semibold text-gray-500">{rev.company}</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. HERO CALL-TO-ACTION CLOSE */}
            <section className="bg-white py-16 text-center border-t border-slate-100">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">Level Up Your Success Today</h2>
                <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
                  Join dozens of local businesses and career professionals in Suffolk County who have trusted Level Up to transform their operational models.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a href={`tel:${businessConfig.phoneRaw}`} className="w-full sm:w-auto px-6 py-3 bg-[#E0A922] hover:bg-[#C99414] text-[#0F172A] text-xs font-bold uppercase tracking-wider rounded-[4px] shadow transition-colors block text-center">
                    <Phone className="w-4 h-4 mr-2 inline-block -mt-0.5" />
                    Call Office: {businessConfig.phone}
                  </a>
                  <button onClick={() => setCurrentPage('contact')} className="w-full sm:w-auto px-6 py-3 border border-slate-900 bg-slate-950 text-white hover:bg-slate-800 transition-colors font-bold text-xs uppercase tracking-wider rounded-[4px] cursor-pointer">
                    Submit Inquiries
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      case 'services':
        return <Services onSelectServiceForContact={handleSelectServiceForContact} />;
      case 'about':
        return <About />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact preselectedService={preselectedService} setPreselectedService={setPreselectedService} />;
      case 'admin':
        return <OwnerPortal />;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Universal Sticky Header Element */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Dynamic View Shell */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Universal Sticky Footer Element */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
