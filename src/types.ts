/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: 'Business' | 'Consulting' | 'Development' | 'Management';
  features: string[];
  icon: string; // Dynamic icon name matching lucide-react
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  date: string;
  avatar?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceId?: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved' | 'archived';
  createdAt: string;
}

export interface BusinessConfig {
  name: string;
  location: string;
  phone: string;
  phoneRaw: string;
  email: string;
  hours: string;
  address: string;
  mapsEmbedUrl: string;
}
