/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import { businessConfig } from '../data';
import { Lead } from '../types';

interface ContactProps {
  preselectedService: string;
  setPreselectedService: (service: string) => void;
}

export default function Contact({ preselectedService, setPreselectedService }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Set the service automatically if one was passed down from the Services tab
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      return;
    }

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name,
      email,
      phone,
      serviceId: service || 'General success enquiry',
      message,
      status: 'new',
      createdAt: new Date().toISOString()
    };

    // Save lead to local storage array
    const savedLeads = localStorage.getItem('level_up_leads');
    let leadsList: Lead[] = [];
    if (savedLeads) {
      try {
        leadsList = JSON.parse(savedLeads);
      } catch (err) {
        leadsList = [];
      }
    }
    leadsList.push(newLead);
    localStorage.setItem('level_up_leads', JSON.stringify(leadsList));

    // Display confirmation and clean fields
    setSubmitted(true);
    setPreselectedService('');  // Reset preselect global trigger
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setService('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact-section" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A] bg-[#F59E0B]/10 px-3 py-1.5 rounded-[4px] border border-[#F59E0B]/25 inline-block">
            Inbound Communications Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight uppercase leading-tight">
            Initiate Your Success Blueprint Today
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Fill out our strategic inquiry worksheet below, or call our local coordinate office to speak with Steven Rivera or our account experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: business details + location map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A] tracking-tight border-b border-gray-100 pb-3 uppercase">
                Local Operation Coordinates
              </h3>

              <div className="space-y-4 pt-1">
                {/* Telephone */}
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 text-[#2563EB] rounded-[4px] mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Telephone Channel</h4>
                    <p className="text-xs font-medium text-gray-400 mt-0.5">Quick consultation & scheduling</p>
                    <a
                      href={`tel:${businessConfig.phoneRaw}`}
                      className="text-base font-extrabold text-[#2563EB] hover:underline"
                    >
                      {businessConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 text-[#2563EB] rounded-[4px] mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Direct Mail Channel</h4>
                    <p className="text-xs font-medium text-gray-400 mt-0.5">Corporate business proposals</p>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="text-sm font-extrabold text-gray-700 hover:text-[#2563EB] hover:underline break-all"
                    >
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                {/* Street Location */}
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 text-[#2563EB] rounded-[4px] mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Regional Office</h4>
                    <p className="text-xs font-medium text-[#0F172A] mt-0.5">{businessConfig.address}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Serving Long Island communities, Wyandanch, Deer Park, Babylon, and Suffolk County.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google map iframe wrapper */}
            <div className="relative rounded-[4px] overflow-hidden border border-gray-200 shadow-sm h-64 sm:h-72 mt-8 lg:mt-0 flex-grow min-h-[240px]">
              <iframe
                src={businessConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Level Up Location Map, Wyandanch, NY"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right panel: contact worksheet form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-gray-150 rounded-[4px] p-6 sm:p-10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full space-y-5 py-12"
                >
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-[4px] flex items-center justify-center shadow-md shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Transmission Dispatched</span>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight uppercase">Worksheet Received successfully</h3>
                    <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                      Our strategists, directed by Steven Rivera, will analyze your submission details and reach back within 2 business hours.
                    </p>
                  </div>
                  <div className="inline-flex items-center space-x-2 text-xs font-medium text-gray-400 pt-8">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your data is protected & stored locally</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight block uppercase">
                      Professional Growth Worksheet
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Complete all basic fields to request detailed documentation, proposal reviews, or diagnostic callbacks.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="user-name" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Full Name *</label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        placeholder="Johnathan Miller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-3 px-4 w-full bg-white border border-gray-200 text-sm text-[#0F172A] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all duration-200 placeholder-gray-400 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="user-email" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Corporate Email *</label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        placeholder="miller@enterprise.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-3 px-4 w-full bg-white border border-gray-200 text-sm text-[#0F172A] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all duration-200 placeholder-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone details */}
                    <div className="space-y-2">
                      <label htmlFor="user-phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Primary Phone *</label>
                      <input
                        id="user-phone"
                        type="tel"
                        required
                        placeholder="234-288-4112"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="py-3 px-4 w-full bg-white border border-gray-200 text-sm text-[#0F172A] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all duration-200 placeholder-gray-400 font-medium"
                      />
                    </div>

                    {/* Pre-focus service selection drop down */}
                    <div className="space-y-2">
                      <label htmlFor="user-service" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Service Focus</label>
                      <select
                        id="user-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="p-3 w-full bg-white border border-gray-200 text-sm text-[#0F172A] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all duration-200 font-medium"
                      >
                        <option value="">General Inquiries & Other</option>
                        <option value="Business Coaching & Consultation">Business Coaching & Consultation</option>
                        <option value="Career & Skills Development">Career & Skills Development</option>
                        <option value="Strategic Management Solutions">Strategic Management Solutions</option>
                        <option value="Local Growth & Marketing">Local Growth & Marketing</option>
                        <option value="Custom Enterprise Solutions">Custom Enterprise Solutions</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body text */}
                  <div className="space-y-2">
                    <label htmlFor="user-msg" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Business Context & Goals *</label>
                    <textarea
                      id="user-msg"
                      required
                      rows={4}
                      placeholder="Give details about your company operations, objectives, current marketing bottlenecks, or career targets..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="p-4 w-full bg-white border border-gray-200 text-sm text-[#0F172A] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all duration-200 placeholder-gray-400 font-medium leading-relaxed"
                    />
                  </div>

                  {/* Submission dispatch */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full btn-premium-primary text-center font-bold tracking-wider uppercase"
                    >
                      Dispatch Solution Request
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
}
