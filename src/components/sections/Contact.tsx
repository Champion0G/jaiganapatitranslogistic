"use client";

import React, { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    alert("Message sent successfully! We will contact you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <Section id="contact" className="bg-brand-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            Ready to <br />
            <span className="text-brand-red">Ship with Us?</span>
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Contact us for a custom quote or to discuss your long-term logistics requirements. Our team is available 24/7 for support.
          </p>

          <div className="space-y-8">
            <a href="tel:+919937045899" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-md group-hover:bg-brand-red transition-colors">
                <Phone className="w-5 h-5 text-brand-red group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Call Anytime</p>
                <p className="text-xl font-bold text-brand-dark">+91 99370 45899</p>
              </div>
            </a>

            <a href="https://wa.me/919937045899" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-md group-hover:bg-brand-red transition-colors">
                <MessageSquare className="w-5 h-5 text-brand-red group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">WhatsApp</p>
                <p className="text-xl font-bold text-brand-dark">+91 99370 45899</p>
              </div>
            </a>

            <a href="mailto:admin@jaiganapatitranslogostic.com" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-md group-hover:bg-brand-red transition-colors">
                <Mail className="w-5 h-5 text-brand-red group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Email Us</p>
                <p className="text-xl font-bold text-brand-dark break-all">admin@jaiganapatitranslogostic.com</p>
              </div>
            </a>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center shadow-md group-hover:bg-brand-red transition-colors">
                <MapPin className="w-5 h-5 text-brand-red group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Location</p>
                <p className="text-lg font-bold text-brand-dark">Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-brand-red" />
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-brand-light border-none p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full bg-brand-light border-none p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Requirement Details</label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full bg-brand-light border-none p-4 focus:ring-2 focus:ring-brand-red outline-none transition-all resize-none"
                placeholder="Briefly describe your logistics needs"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <Button type="submit" size="lg" className="w-full group">
              Send Message
              <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
