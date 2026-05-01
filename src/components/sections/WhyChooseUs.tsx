"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Clock, ShieldCheck, Truck, BarChart3, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Clock,
    title: "On-Time Every Time",
    desc: "Since 2018, we have maintained a 98% on-time delivery record for our clients.",
  },
  {
    icon: Truck,
    title: "Self-Owned Fleet",
    desc: "We don't rely on third parties. Our own trucks mean guaranteed reliability and better control.",
  },
  {
    icon: ShieldCheck,
    title: "Expert Handling",
    desc: "Specialized in steel and industrial logistics, knowing exactly how to handle your cargo.",
  },
  {
    icon: BarChart3,
    title: "Transparent Ops",
    desc: "Direct communication and clear updates on your shipment's progress.",
  },
];

export const WhyChooseUs = () => {
  return (
    <Section id="why-us">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            The Industry <br />
            Standard in <br />
            <span className="text-brand-red italic">Logistics</span>
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            We understand that in the B2B steel industry, delays are not just inconveniences—they are costs. Our entire operation is built to eliminate them.
          </p>
          
          <div className="bg-brand-dark p-8 text-white relative overflow-hidden group">
            <BadgeCheck className="absolute -top-4 -right-4 w-24 h-24 text-white/5 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium opacity-60 mb-4 uppercase tracking-widest">Client Satisfaction</p>
            <div className="text-4xl font-bold mb-2">100%</div>
            <p className="text-xs text-white/50">Trusted by over 50+ steel plants and trading houses.</p>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-brand-light hover:border-brand-red/30 transition-all hover:bg-brand-light/50 group"
            >
              <div className="w-14 h-14 bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <reason.icon className="w-7 h-7 text-brand-red group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Section Inline */}
      <div className="mt-32 pt-20 border-t border-brand-light">
        <p className="text-center text-gray-400 text-sm uppercase tracking-[0.3em] mb-12">Trusted by Industrial Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholder for logos with clean typography if actual logos aren't provided */}
           <div className="text-2xl font-black italic tracking-tighter">STEELCO</div>
           <div className="text-2xl font-bold tracking-widest">METALS-TRADING</div>
           <div className="text-2xl font-serif font-bold italic">INDUSTRIAL-PRO</div>
           <div className="text-2xl font-black tracking-[0.2em]">IRON-HUB</div>
           <div className="text-2xl font-extrabold uppercase">BulkTrans</div>
        </div>
      </div>
    </Section>
  );
};
