/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Testimonial, BusinessConfig } from './types';

export const businessConfig: BusinessConfig = {
  name: 'Level Up',
  location: 'Wyandanch, NY',
  phone: '234-288-4112',
  phoneRaw: '2342884112',
  email: 'stevenrivera8678348@gmail.com',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM',
  address: 'Wyandanch, Long Island, NY 11798',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.479633887019!2d-73.3670984837651!3d40.75385600213123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82ce997e59bbf%3A0xc3dd6b9da5df9a44!2sWyandanch%2C%20NY!5e0!3m2!1sen!2sus!4v1717534433123!5m2!1sen!2sus'
};

export const initialServices: Service[] = [
  {
    id: 'biz-coaching',
    title: 'Business Coaching & Consultation',
    shortDesc: 'Tailored strategic planning to scale your local operation, optimize system workflows, and boost profitability.',
    longDesc: 'Our premier Business Coaching service connects custom analytics with practical growth templates. We assess your physical and digital workflows, conduct thorough Long Island target market assessments, and design actionable blueprints to help you level up your business operations.',
    category: 'Consulting',
    icon: 'TrendingUp',
    features: [
      'Strategic market & competitor mapping',
      'Operational workflow & cost optimization',
      'Direct 1-on-1 performance review workshops',
      'Tailored revenue scaling & growth models'
    ]
  },
  {
    id: 'career-dev',
    title: 'Career & Skills Development',
    shortDesc: 'Upskilling courses, resume remodeling, and mock interview preparations to secure your next major milestone.',
    longDesc: 'Elevate your personal value in today’s demanding corporate landscape. We offer resume re-writing, interview mastery, and technical skill development aligned directly with Long Island and New York metropolitan staffing demands.',
    category: 'Development',
    icon: 'GraduationCap',
    features: [
      'Professional resume & LinkedIn makeover',
      'Executive-level mock interview systems',
      'Targeted industry skill certifications',
      'Personal career mapping & mentoring'
    ]
  },
  {
    id: 'strat-management',
    title: 'Strategic Management Solutions',
    shortDesc: 'Comprehensive project management, structural auditing, and process modernizations for local enterprises.',
    longDesc: 'From standard operational oversight to large-scale program rollouts, our Strategic Management Solutions ensure your milestones are achieved ahead of schedule and with optimal capital efficiency.',
    category: 'Management',
    icon: 'Briefcase',
    features: [
      'Agile framework & tool chain implementations',
      'Resource and human capital allocation models',
      'Performance audit metric dashboards',
      'Risk management & hazard mitigation reports'
    ]
  },
  {
    id: 'brand-growth',
    title: 'Local Growth & Marketing Operations',
    shortDesc: 'Boost local search visibility, dominate local Google Maps, and capture targeted local Long Island buyers.',
    longDesc: 'For businesses operating in Wyandanch, Deer Park, Babylon, and the wider Long Island region, visibility is paramount. We build, optimize, and manage localized SEO strategies, Google Business profiles, and responsive funnel channels to fuel inbound calls.',
    category: 'Business',
    icon: 'Target',
    features: [
      'Wyandanch & Long Island hyper-local SEO campaigns',
      'Google Maps listing optimization & audit',
      'Aesthetic landing page layout strategy',
      'Continuous conversion rate improvement'
    ]
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Managing Partner',
    company: 'East End Automotive',
    rating: 5,
    content: 'Level Up completely revitalized our local operation. Their strategic consulting identified bottlenecks we were blind to, boosting our workflow efficiency by 35% in three months. Highly recommended for any Long Island business looking to scale!',
    date: 'May 12, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Operations Director',
    company: 'Vanguard Tech Solutions',
    rating: 5,
    content: 'The career coaching team at Level Up is outstanding. They restructured my resume, prepared me for high-intensity management round interviews, and helped me negotiate a package $25k higher than my starting target. The return on investment is undeniable.',
    date: 'April 28, 2026',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 't3',
    name: 'Darnell Carter',
    role: 'Founder',
    company: 'Carter Custom Renovation',
    rating: 5,
    content: 'Our Google Business visibility was static until Level Up optimized our profile. We went from 2-3 inquiries a week to almost daily high-value inbound calls directly from people searching in Wyandanch and Babylon. Professional team, fantastic execution.',
    date: 'May 20, 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120'
  }
];
