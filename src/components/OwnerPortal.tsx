/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase, Mail, Phone, Calendar, Trash2, CheckCircle2, AlertCircle,
  Archive, Download, PlusCircle, RefreshCw, Star, ArrowLeft, ShieldAlert
} from 'lucide-react';
import { Lead, Testimonial } from '../types';

export default function OwnerPortal() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'contacted' | 'resolved' | 'archived'>('all');
  const [showNotesId, setShowNotesId] = useState<string | null>(null);
  const [notesText, setNotesText] = useState('');
  const [notesSaved, setNotesSaved] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'leads' | 'reviews'>('leads');

  // Load leads and reviews on mount
  useEffect(() => {
    loadLeads();
    loadReviews();
    
    // Load existing notes
    const savedNotes = localStorage.getItem('level_up_lead_notes');
    if (savedNotes) {
      try {
        setNotesSaved(JSON.parse(savedNotes));
      } catch (e) {}
    }
  }, []);

  const loadLeads = () => {
    const savedLeads = localStorage.getItem('level_up_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        setLeads([]);
      }
    } else {
      setLeads([]);
    }
  };

  const loadReviews = () => {
    const savedReviews = localStorage.getItem('level_up_testimonials');
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        setReviews([]);
      }
    }
  };

  const updateLeadStatus = (leadId: string, newStatus: 'new' | 'contacted' | 'resolved' | 'archived') => {
    const updated = leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('level_up_leads', JSON.stringify(updated));
  };

  const deleteLead = (leadId: string) => {
    if (confirm('Are you absolute sure you want to delete this lead? This cannot be undone.')) {
      const updated = leads.filter(l => l.id !== leadId);
      setLeads(updated);
      localStorage.setItem('level_up_leads', JSON.stringify(updated));
    }
  };

  const deleteReview = (revId: string) => {
    if (confirm('Delete this client testimonial from public view?')) {
      const updated = reviews.filter(r => r.id !== revId);
      setReviews(updated);
      localStorage.setItem('level_up_testimonials', JSON.stringify(updated));
    }
  };

  const saveNote = (leadId: string) => {
    const updatedNotes = { ...notesSaved, [leadId]: notesText };
    setNotesSaved(updatedNotes);
    localStorage.setItem('level_up_lead_notes', JSON.stringify(updatedNotes));
    setShowNotesId(null);
    setNotesText('');
  };

  // Seed sample leads for quick demonstration testing
  const seedMockLeads = () => {
    const sampleLeads: Lead[] = [
      {
        id: 'seed-1',
        name: 'Sarah Jenkins',
        email: 'jenkins.dental@gmail.com',
        phone: '631-555-8293',
        serviceId: 'Local Growth & Marketing',
        message: 'We are a dental clinic located on Straight Path close to the Wyandanch LIRR station. We have high-end diagnostic tools but struggle with local search visibility. Need Google profile auditing and local maps citation optimizations.',
        status: 'new',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString() // 4 hours ago
      },
      {
        id: 'seed-2',
        name: 'Richard Martinez',
        email: 'richard@martinezbuilders.org',
        phone: '516-448-9102',
        serviceId: 'Strategic Management Solutions',
        message: 'Contracting agency interested in 1-on-1 operational advisory. We have 14 active field technicians but struggle with milestone calculations, materials costs margins, and human capital scheduling software.',
        status: 'contacted',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString() // 1 day ago
      },
      {
        id: 'seed-3',
        name: 'Tiffany Vance',
        email: 'tiffany.v@vancebeauty.com',
        phone: '234-991-0391',
        serviceId: 'Business Coaching & Consultation',
        message: 'Opening a boutique salon next month. Would love to sit down with Steven or a lead consultant to map a 12-month branding rollout, coordinate cost buffers, and hire skilled partners.',
        status: 'resolved',
        createdAt: new Date(Date.now() - 3600000 * 72).toISOString() // 3 days ago
      }
    ];

    setLeads(sampleLeads);
    localStorage.setItem('level_up_leads', JSON.stringify(sampleLeads));
  };

  // Export current inquiries list to CSV
  const exportToCSV = () => {
    if (leads.length === 0) {
      alert('No leads to export.');
      return;
    }

    const headers = ['ID', 'Client Name', 'Email Address', 'Phone Number', 'Focus focus', 'Context/Message', 'Status', 'Received on', 'Private Notes'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name.replace(/"/g, '""')}"`,
      l.email,
      l.phone,
      `"${(l.serviceId || 'General').replace(/"/g, '""')}"`,
      `"${l.message.replace(/"/g, '""')}"`,
      l.status.toUpperCase(),
      new Date(l.createdAt).toLocaleString(),
      `"${(notesSaved[l.id] || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `LevelUp_LeadsExport_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = activeFilter === 'all'
    ? leads
    : leads.filter(l => l.status === activeFilter);

  // Status counters calculation
  const totalInbound = leads.length;
  const countNew = leads.filter(l => l.status === 'new').length;
  const countContacted = leads.filter(l => l.status === 'contacted').length;
  const countResolved = leads.filter(l => l.status === 'resolved').length;

  return (
    <section className="bg-slate-900 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Portal Header */}
        <div className="border-b border-slate-800 pb-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-[4px] bg-[#2563EB]/20 text-[#2563EB] border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
              ✦ Administrative Control Board
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight font-sans text-white block uppercase">
              Level Up Staff Console
            </h1>
            <p className="text-sm text-slate-400">
              Review and manage incoming system worksheets, private client notes, and testimonials for the Wyandanch, NY market.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={seedMockLeads}
              className="inline-flex items-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold uppercase tracking-wider rounded-[4px] border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4 mr-2 text-[#F59E0B] animate-pulse" />
              Seed Testing Leads
            </button>
            <button
              onClick={exportToCSV}
              className="inline-flex items-center px-4 py-2.5 bg-[#F59E0B] text-[#0F172A] hover:bg-[#D97706] text-xs font-bold uppercase tracking-wider rounded-[4px] shadow transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Leads (.CSV)
            </button>
          </div>
        </div>

        {/* Console Navigation tabs */}
        <div className="flex space-x-2 mb-8 bg-slate-950 p-1.5 rounded-[4px] border border-slate-800 self-start inline-flex">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-5 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'leads'
                ? 'bg-[#2563EB] text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Inbound Leads ({leads.length})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-5 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'reviews'
                ? 'bg-[#2563EB] text-white shadow'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            Testimonial Moderation ({reviews.length})
          </button>
        </div>

        {activeTab === 'leads' ? (
          <>
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 text-slate-900">
              {[
                { title: 'Total Submissions', count: totalInbound, color: 'bg-white text-slate-900 border border-slate-200', label: 'All Inquiries' },
                { title: 'New Messages', count: countNew, color: 'bg-orange-50 text-orange-955 border-l-4 border-orange-500 border-y border-r border-[#E2E8F0]', label: 'Action Needed' },
                { title: 'Active Followups', count: countContacted, color: 'bg-blue-50 text-blue-955 border-l-4 border-[#2563EB] border-y border-r border-[#E2E8F0]', label: 'Under review' },
                { title: 'Closed Cases', count: countResolved, color: 'bg-emerald-50 text-emerald-955 border-l-4 border-emerald-500 border-y border-r border-[#E2E8F0]', label: 'Successfully resolved' }
              ].map((m, i) => (
                <div key={i} className={`p-5 rounded-[4px] ${m.color} shadow-sm flex flex-col justify-between`}>
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60 block">{m.title}</span>
                  <div className="pt-3 flex items-baseline justify-between">
                    <span className="text-3xl font-black">{m.count}</span>
                    <span className="text-[10px] font-semibold opacity-75">{m.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Filter Pills bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-5">
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'All Inbound' },
                  { value: 'new', label: 'New Worksheets' },
                  { value: 'contacted', label: 'In Discussions' },
                  { value: 'resolved', label: 'Closed Cases' }
                ].map((f) => (
                  <button
                    key={f.value}
                    onClick={() => setActiveFilter(f.value as any)}
                    className={`px-3.5 py-1.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                      activeFilter === f.value
                        ? 'bg-[#F59E0B] text-slate-950 shadow'
                        : 'bg-slate-800 hover:bg-slate-750 text-slate-300'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Presenting {filteredLeads.length} record(s)
              </span>
            </div>

            {/* Leads Inbound list */}
            {filteredLeads.length === 0 ? (
              <div className="text-center py-20 bg-slate-950 rounded-[4px] border border-slate-800">
                <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-base font-bold text-slate-300 uppercase tracking-wider">No matching inquiries found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                  Submit forms via the Contact panel, or tap "Seed Testing Leads" in the upper right to instantly populate full-fidelity mock data.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredLeads.map((lead) => (
                  <motion.div
                    layout
                    key={lead.id}
                    className="p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 transition"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 leading-none">
                      
                      {/* Name & Contact Details column */}
                      <div className="lg:col-span-4 space-y-4">
                        <div>
                          <span className="text-[10px] font-mono text-[#2563EB] font-bold tracking-widest block uppercase">
                            Client Identity ({lead.id})
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1 block leading-tight">{lead.name}</h3>
                          <span className="text-xs text-slate-500 block mt-1.5 font-mono">
                            Sent: {new Date(lead.createdAt).toLocaleString()}
                          </span>
                        </div>

                        <div className="space-y-2 text-xs font-semibold pt-1">
                          <a href={`tel:${lead.phone}`} className="flex items-center text-slate-300 hover:text-[#2563EB] transition-colors leading-none">
                            <Phone className="w-3.5 h-3.5 mr-2 text-[#2563EB]" />
                            {lead.phone}
                          </a>
                          <a href={`mailto:${lead.email}`} className="flex items-center text-slate-300 hover:text-[#2563EB] transition-colors leading-none break-all">
                            <Mail className="w-3.5 h-3.5 mr-2 text-[#2563EB]" />
                            {lead.email}
                          </a>
                        </div>
                      </div>

                      {/* Request Context Message Column */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                            {lead.serviceId || 'General enquiry'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/60 p-3.5 rounded-xl border border-slate-900">
                          "{lead.message}"
                        </p>

                        {/* Internal Note field display */}
                        {notesSaved[lead.id] ? (
                          <div className="bg-slate-850 p-3 rounded-lg border border-slate-800 text-[11px] text-amber-400">
                            <span className="font-bold block uppercase tracking-wider text-[9px] text-[#2563EB] mb-1">Office private note:</span>
                            "{notesSaved[lead.id]}"
                          </div>
                        ) : null}
                      </div>

                      {/* Actions Controls column */}
                      <div className="lg:col-span-3 flex flex-col justify-between items-end border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
                        {/* Status badge controller */}
                        <div className="flex items-center space-x-2">
                          <span className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                            lead.status === 'new' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                            lead.status === 'contacted' ? 'bg-[#2563EB]/10 text-blue-400 border border-blue-500/20' :
                            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            {lead.status}
                          </span>
                        </div>

                        {/* Control buttons group */}
                        <div className="flex flex-wrap justify-end gap-1.5 mt-4 lg:mt-0 font-medium">
                          {lead.status === 'new' && (
                            <button
                              onClick={() => updateLeadStatus(lead.id, 'contacted')}
                              className="p-2 bg-slate-900 hover:bg-[#2563EB] rounded-lg text-slate-400 hover:text-white text-xs"
                              title="Mark as Followed up"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-400" />
                            </button>
                          )}
                          {lead.status === 'contacted' && (
                            <button
                              onClick={() => updateLeadStatus(lead.id, 'resolved')}
                              className="p-2 bg-slate-900 hover:bg-emerald-600 rounded-lg text-slate-400 hover:text-white text-xs"
                              title="Mark as Resolved case"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            </button>
                          )}
                          <button
                            onClick={() => {
                              setShowNotesId(lead.id);
                              setNotesText(notesSaved[lead.id] || '');
                            }}
                            className="p-2 bg-slate-900 hover:bg-amber-600 rounded-lg text-slate-400 hover:text-white text-xs"
                            title="Add internal team comments"
                          >
                            <Calendar className="w-4 h-4 text-amber-500" />
                          </button>
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="p-2 bg-slate-900 hover:bg-red-650 rounded-lg text-slate-400 hover:text-white text-xs"
                            title="Delete inquiry"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Interactive dialog popup for private office comments */}
                    <AnimatePresence>
                      {showNotesId === lead.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-slate-800 space-y-3"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block">Add administrative/office review comments:</span>
                          <textarea
                            rows={2}
                            placeholder="e.g. Called on 6/5 - Steven scheduled site audit consultation for next Monday morning..."
                            value={notesText}
                            onChange={(e) => setNotesText(e.target.value)}
                            className="p-3 w-full bg-slate-900 border border-slate-700 text-xs text-white rounded-xl focus:outline-none focus:border-[#2563EB]"
                          />
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => setShowNotesId(null)}
                              className="px-3.5 py-1.5 bg-slate-850 hover:bg-slate-800 text-xs rounded-lg"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => saveNote(lead.id)}
                              className="px-4 py-1.5 bg-[#2563EB] hover:bg-blue-700 text-xs font-bold rounded-lg"
                            >
                              Save Comments
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          /* Testimonials moderation Tab view */
          <div className="space-y-6">
            <div className="bg-slate-950 p-6 rounded-[4px] border border-slate-800 flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold text-white block uppercase tracking-wider">Active Client Testimonials Moderation</h3>
                <p className="text-xs text-slate-400 mt-1">Review feedback submitted by visitors. Deleted reviews will instantly update on the public reviews carousel.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#2563EB]/15 text-[#2563EB] border border-blue-500/20 px-3 py-1 bg-blue-500/10 rounded-[4px]">
                LOCAL LIVE SYNC
              </span>
            </div>

            {reviews.length === 0 ? (
              <div className="text-center py-20 bg-slate-950 rounded-[4px] border border-slate-800">
                <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-base font-bold text-slate-300 uppercase tracking-widest">No Testimonials loaded</h3>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((rev) => (
                  <motion.div
                    layout
                    key={rev.id}
                    className="p-5 bg-slate-950 rounded-[4px] border border-slate-800 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-sm font-bold text-white block uppercase tracking-wider">{rev.name}</h4>
                          <span className="text-[10px] text-slate-500 block mt-1">{rev.role}, {rev.company}</span>
                        </div>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} className={`w-3 h-3 ${idx < rev.rating ? 'fill-current text-[#F59E0B]' : 'text-slate-800'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 italic">"{rev.content}"</p>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-900 text-[10px]">
                      <span className="text-slate-500">Sent: {rev.date}</span>
                      <button
                        onClick={() => deleteReview(rev.id)}
                        className="flex items-center text-red-400 hover:text-red-300 font-bold uppercase tracking-wider text-[9px]"
                      >
                        <Trash2 className="w-3 h-3 mr-1" />
                        Remove Review
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
