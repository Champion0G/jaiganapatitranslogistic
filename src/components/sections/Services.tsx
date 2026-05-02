"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Truck, Package, Boxes, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Truck,
    title: "Bulk Goods Transport",
    desc: "Specialized heavy-duty transport for Iron Ore, Manganese Ore, and Coal across state borders.",
  },
  {
    icon: Boxes,
    title: "Industrial Logistics",
    desc: "Safe and efficient movement of raw minerals and industrial materials for steel plants.",
  },
  {
    icon: MoveRight,
    title: "Strategic Corridors",
    desc: "Optimized logistics routes connecting industrial hubs in Bengal, Jharkhand, and Odisha.",
  },
];

export const Services = () => {
  return (
    <Section id="services" className="bg-brand-light">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Our Core Service</span>
        <h2 className="text-4xl md:text-5xl mb-6">Premium Road Transport</h2>
        <p className="text-gray-600">
          We provide a focused, high-quality road transport service designed specifically for industrial needs. Our primary focus is reliability and safety.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white p-10 border-b-4 border-transparent hover:border-brand-red transition-all shadow-sm hover:shadow-xl group"
          >
            <div className="w-16 h-16 bg-brand-light flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors">
              <service.icon className="w-8 h-8 text-brand-red group-hover:text-white" />
            </div>
            <h3 className="text-2xl mb-4 uppercase tracking-tight">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Primary Service Highlight */}
      <div className="mt-20 bg-brand-dark p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h3 className="text-3xl mb-2">Need industrial scale transport?</h3>
            <p className="text-white/60">We specialize in heavy-duty logistics for steel plants and traders.</p>
          </div>
          <button className="bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-red-800 transition-colors shrink-0">
            Get a Quote
          </button>
        </div>
      </div>
    </Section>
  );
};
