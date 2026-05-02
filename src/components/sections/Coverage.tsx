"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    state: "West Bengal",
    hubs: ["Kolkata", "Haldia", "Durgapur", "Asansol"],
    color: "bg-brand-red",
  },
  {
    state: "Odisha",
    hubs: ["Bhubaneswar", "Cuttack", "Rourkela", "Angul", "Jajpur"],
    color: "bg-brand-gray",
  },
  {
    state: "Jharkhand",
    hubs: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    color: "bg-brand-dark",
  },
];

export const Coverage = () => {
  return (
    <Section id="coverage" dark>
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Where We Operate</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight text-white">
            Regional Network Across <br />
            <span className="text-white/40 italic font-light">Eastern & Southern India</span>
          </h2>
          <p className="text-white/70 mb-12 text-lg leading-relaxed">
            Our strategic focus on these three key states allows us to provide deep local expertise, faster delivery times, and a robust network for industrial transport.
          </p>

          <div className="space-y-8">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className={`w-12 h-12 ${loc.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{loc.state}</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {loc.hubs.map((hub) => (
                      <span key={hub} className="text-sm text-white/50 hover:text-brand-red transition-colors cursor-default">
                        • {hub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="relative aspect-square max-w-lg mx-auto bg-white/5 border border-white/10 rounded-full flex items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.1),transparent_70%)]" />
            
            {/* Visual representation of connectivity */}
            <div className="relative z-10 text-center">
              <Navigation className="w-24 h-24 text-brand-red mx-auto mb-6 opacity-50 animate-pulse-slow" />
              <div className="text-6xl font-black text-white/10 select-none">
                3 STATES <br />
                CONNECTED
              </div>
            </div>

            {/* Decorative circles */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border border-white/5 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  delay: i * 1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
