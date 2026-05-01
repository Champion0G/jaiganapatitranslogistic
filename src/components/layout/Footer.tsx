"use client";

import React from "react";
import { Truck, Phone, MessageSquare, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-red p-2">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">JAI GANAPATI</span>
                <span className="text-[10px] tracking-[0.2em] font-medium leading-none mt-1 text-brand-red">
                  TRANSLOGISTIC
                </span>
              </div>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              Premium road transport solutions for the steel and trading industries. Operating with excellence across West Bengal, Odisha, and Andhra Pradesh since 2018.
            </p>
            <div className="flex gap-4">
              <a href="tel:+919937045899" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919937045899" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="mailto:admin@jaiganapatitranslogostic.com" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-red transition-colors">Services</a></li>
              <li><a href="#coverage" className="hover:text-brand-red transition-colors">Coverage Area</a></li>
              <li><a href="#why-us" className="hover:text-brand-red transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-brand-red transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Business Info</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li>
                <span className="block text-white/30 uppercase text-[10px] font-bold mb-1">GST Number</span>
                <span>19XXXXX0000X1ZX (Placeholder)</span>
              </li>
              <li>
                <span className="block text-white/30 uppercase text-[10px] font-bold mb-1">Registered Office</span>
                <span>Kolkata, West Bengal, India</span>
              </li>
              <li>
                <span className="block text-white/30 uppercase text-[10px] font-bold mb-1">Service Hours</span>
                <span>24/7 Logistics Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Jai Ganapati Translogistic. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
