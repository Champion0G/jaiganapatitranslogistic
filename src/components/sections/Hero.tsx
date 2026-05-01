"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_logistics_trucks_1777637204874.png"
          alt="Logistics Fleet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-red text-white text-xs font-bold uppercase tracking-widest mb-6">
              Established since 2018
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Reliable Road Transport <br />
              <span className="text-brand-red italic">for Steel & Trading</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Operating across West Bengal, Odisha & Andhra Pradesh. We provide heavy-duty logistics solutions with our self-owned fleet, ensuring trust and on-time delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+919937045899" className="inline-block">
                <Button size="lg" className="group w-full sm:w-auto">
                  Call Now
                  <Phone className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              <a href="https://wa.me/919937045899" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark group w-full sm:w-auto">
                  WhatsApp Us
                  <MessageSquare className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  );
};
