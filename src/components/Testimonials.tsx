/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, User, Building, Quote, CheckCircle2 } from 'lucide-react';
import { initialTestimonials } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  // Initialize reviews from localStorage or default data
  useEffect(() => {
    const savedReviews = localStorage.getItem('level_up_testimonials');
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        setReviews(initialTestimonials);
      }
    } else {
      setReviews(initialTestimonials);
      localStorage.setItem('level_up_testimonials', JSON.stringify(initialTestimonials));
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content || !role) {
      return;
    }

    const newReview: Testimonial = {
      id: `review-${Date.now()}`,
      name,
      role,
      company: company || 'Local Business partner',
      rating,
      content,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('level_up_testimonials', JSON.stringify(updatedReviews));

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setRole('');
      setCompany('');
      setContent('');
      setRating(5);
      setSubmitted(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section id="testimonials-section" className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/5 px-3 py-1.5 rounded-[4px] border border-[#2563EB]/15 table">
              Client Success Records
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0F172A] tracking-tight uppercase leading-tight">
              Real Impact, Written by Real Operators
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Read recommendations and growth timelines from business owners, local contractors, and professionals in Long Island, NY.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center space-x-2 px-5 py-3 bg-white border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white text-xs font-bold uppercase tracking-wider rounded-[4px] shadow-sm transition-all duration-200 self-start md:self-auto flex-shrink-0"
          >
            <MessageSquarePlus className="w-4 h-4 mr-1 text-[#2563EB]" />
            <span>Write a Success Review</span>
          </button>
        </div>

        {/* Dynamic Expandable Review Submission Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-16 bg-white border border-[#E2E8F0] rounded-[4px]"
            >
              <div className="p-6 sm:p-10 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center space-y-4"
                  >
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-[4px] flex items-center justify-center shadow-inner">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A] uppercase tracking-wider">Review Appreciated!</h3>
                      <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                        Your testimonial raises community credibility and goes live on the dashboard immediately.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-6">
                    <h3 className="text-lg font-bold text-[#0F172A] pb-3 border-b border-gray-100 uppercase tracking-wider">
                      Share Your Experience with Level Up
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="rev-name" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Your Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            id="rev-name"
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-9 pr-4 py-3 w-full bg-slate-50 border border-gray-200 text-sm text-gray-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="rev-role" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Role / Designation *</label>
                        <input
                          id="rev-role"
                          type="text"
                          required
                          placeholder="e.g. Managing Director / Founder"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className="px-4 py-3 w-full bg-slate-50 border border-gray-200 text-sm text-gray-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="rev-comp" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Business / Company Name</label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                          <input
                            id="rev-comp"
                            type="text"
                            placeholder="e.g. Wyandanch Dental Clinic"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="pl-9 pr-4 py-3 w-full bg-slate-50 border border-gray-200 text-sm text-gray-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                      <div className="md:col-span-3 space-y-2">
                        <label htmlFor="rev-content" className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Your Review *</label>
                        <textarea
                          id="rev-content"
                          required
                          rows={3}
                          placeholder="What changes has Level Up brought to your corporate workflow, local visibility, or team efficiency?"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          className="p-4 w-full bg-slate-50 border border-gray-200 text-sm text-gray-900 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Overall Rating</span>
                        <div className="flex items-center space-x-1.5 bg-slate-50 p-4.5 rounded-[4px] border border-gray-150 inline-block">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                               key={star}
                               type="button"
                               onClick={() => setRating(star)}
                               className="focus:outline-none"
                            >
                              <Star
                                className={`w-6 h-6 transition-transform hover:scale-110 duration-150 ${
                                  star <= rating
                                    ? 'text-[#F59E0B] fill-[#F59E0B]'
                                    : 'text-gray-300'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-bold uppercase tracking-wider rounded-[4px]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] text-xs font-bold uppercase tracking-wider rounded-[4px] shadow-sm"
                      >
                        Publish Testimonial
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Review Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <motion.div
              layout
              key={rev.id}
              className="bg-white rounded-[4px] p-6 sm:p-8 border border-[#E2E8F0] shadow-sm flex flex-col justify-between h-full relative group hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Rating and quotes indicator */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-gray-100 group-hover:text-amber-500/10 transition-colors duration-300" />
                </div>

                {/* Main feedback content */}
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              {/* Author metadata details */}
              <div className="flex items-center space-x-3 mt-6 pt-5 border-t border-gray-100">
                {rev.avatar ? (
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-gray-100 flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-[4px] bg-blue-50 border border-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs uppercase flex-shrink-0">
                    {rev.name.charAt(0)}
                  </div>
                )}
                <div className="leading-none">
                  <h4 className="text-sm font-bold text-[#0F172A] block uppercase tracking-wider">{rev.name}</h4>
                  <span className="text-[11px] text-gray-400 block mt-1">
                    {rev.role}, <span className="font-semibold text-gray-500">{rev.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
