/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import { businessConfig } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // JSON-LD Local Business Structured Data for Wyandanch, NY Location SEO
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Level Up',
    'description': 'Professional business development, strategic consulting, career coaching, and localized SEO scaling operations in Wyandanch, Long Island, NY.',
    'telephone': businessConfig.phone,
    'email': businessConfig.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Wyandanch Plaza / Straight Path',
      'addressLocality': 'Wyandanch',
      'addressRegion': 'NY',
      'postalCode': '11798',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '40.7539',
      'longitude': '-73.3671'
    },
    'url': window.location.origin,
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '08:00',
      'closes': '18:00'
    }
  };

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0F172A] text-[#F8FAFC]">
      {/* Schema.org markup generation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Top Banner with high credibility branding */}
      <div className="border-b border-gray-800 bg-[#0B1220] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="p-2 bg-blue-500/10 text-[#2563EB] rounded-[4px] mb-4 inline-block">
              <Award className="w-6 h-6 text-amber-500" />
            </div>
            <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Committed to Quality</h4>
            <p className="text-sm text-gray-400 max-w-xs">
              Every strategic blueprint, consultation, and course is built with strict adherence to maximum visual and technical standards.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="p-2 bg-blue-500/10 text-[#2563EB] rounded-[4px] mb-4 inline-block">
              <Shield className="w-6 h-6 text-[#2563EB]" />
            </div>
            <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Secure & Professional</h4>
            <p className="text-sm text-gray-400 max-w-xs">
              We guard your sensitive corporate information and business proposals with strict confidentiality and high-grade system reviews.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="p-2 bg-blue-500/10 text-[#2563EB] rounded-[4px] mb-4 inline-block">
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>
            <h4 className="text-base font-bold text-white mb-2 uppercase tracking-wider">Local Growth Catalyst</h4>
            <p className="text-sm text-gray-400 max-w-xs">
              Proudly fueling localized business expansion, inbound client acquisition, and high-impact career growth in Wyandanch, NY.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Information Column */}
        <div className="md:col-span-1.5 space-y-6">
          <div>
            <span className="font-sans font-black text-2xl tracking-tight text-white block">
              LEVEL UP
            </span>
            <span className="text-xs tracking-wider text-[#2563EB] font-extrabold uppercase mt-1 block">
              Success Solutions & Local Services
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            High-caliber coaching, modern branding operations, strategic system auditing, and certified resume development tailored for local businesses and individuals in Long Island, New York.
          </p>
          <div className="flex space-x-3.5 pt-2">
            <a href="#" className="w-9 h-9 rounded-[4px] bg-gray-800 hover:bg-[#2563EB] text-gray-400 hover:text-white flex items-center justify-center transition-colors duration-200">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3h-4V6c0-.5.5-1 1-1h3V1h-4C10.5 1 9 2.5 9 5v3z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-[4px] bg-gray-800 hover:bg-[#2563EB] text-gray-400 hover:text-white flex items-center justify-center transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-[4px] bg-gray-800 hover:bg-[#2563EB] text-gray-400 hover:text-white flex items-center justify-center transition-colors duration-200">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Exploration</h4>
          <ul className="space-y-3">
            {[
              { name: 'Home Business Core', page: 'home' },
              { name: 'Professional Services', page: 'services' },
              { name: 'Our Wyandanch Story', page: 'about' },
              { name: 'Client Testimonials', page: 'testimonials' },
              { name: 'Contact & Location Maps', page: 'contact' },
            ].map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => navigateTo(link.page)}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-1.5 text-blue-500 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours Column */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Working Hours</h4>
          <div className="space-y-4">
            <div className="flex items-start text-sm text-gray-400">
              <Clock className="w-4 h-4 mr-2.5 mt-0.5 text-amber-500" />
              <div>
                <p className="font-semibold text-gray-300">Office Hours</p>
                <p className="text-xs text-gray-400 mt-1">Monday – Friday</p>
                <p className="text-xs text-white">8:00 AM – 6:00 PM</p>
                <p className="text-xs text-gray-400 mt-1">Saturday</p>
                <p className="text-xs text-white">9:00 AM – 3:00 PM</p>
                <p className="text-xs text-gray-500 mt-1">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Localized Contact Column */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Headquarters</h4>
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-gray-400">
              <MapPin className="w-4 h-4 mr-2.5 mt-1 text-[#2563EB] flex-shrink-0" />
              <span>{businessConfig.address}</span>
            </li>
            <li className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200">
              <Phone className="w-4 h-4 mr-2.5 text-[#2563EB] flex-shrink-0" />
              <a href={`tel:${businessConfig.phoneRaw}`}>{businessConfig.phone}</a>
            </li>
            <li className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200">
              <Mail className="w-4 h-4 mr-2.5 text-[#2563EB] flex-shrink-0" />
              <a href={`mailto:${businessConfig.email}`} className="break-all">{businessConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sub-footer micro bar */}
      <div className="border-t border-gray-800 bg-[#0A0F1D] py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div>
            <p>&copy; {currentYear} Level Up. All Rights Reserved. Crafted for premium growth.</p>
            <p className="mt-1 text-[10px] text-gray-600">
              Approved local consultant serving Suffolk County, Wyandanch, Deer Park, and Babylon communities.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigateTo('admin')}
              className="hover:text-[#2563EB] text-[10px] tracking-wide uppercase hover:underline transition-colors duration-200 flex items-center bg-gray-800/40 px-2.5 py-1 rounded-[4px] border border-gray-800"
            >
              👑 Staff Console
            </button>
            <span className="text-gray-600">|</span>
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
