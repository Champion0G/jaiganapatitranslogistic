"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

const materials = [
  {
    title: "Iron Ore",
    desc: "High-grade iron ore transport for steel manufacturing plants across the eastern belt.",
    image: "/images/materials/iron_ore.jpg",
    tags: ["Raw Material", "Bulk"],
  },
  {
    title: "Manganese Ore",
    desc: "Specialized handling of manganese minerals and bars, ensuring zero-loss transit.",
    image: "/images/materials/manganese_1.webp",
    tags: ["Industrial", "Mineral"],
  },
  {
    title: "Coal & Coke",
    desc: "Reliable fuel supply logistics for power plants and heavy industries.",
    image: "/images/materials/coal.jpg",
    tags: ["Energy", "Solid Fuel"],
  },
];

export const Materials = () => {
  return (
    <Section id="materials" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Materials We Handle</span>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Specialized in <br />
            <span className="text-brand-red italic">Industrial Raw Materials</span>
          </h2>
        </div>
        <p className="text-gray-500 max-w-sm pb-2">
          We have built a reputation for excellence in transporting specific bulk commodities that power India's industrial growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {materials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            <div className="relative h-80 w-full mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 flex gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-brand-red text-white px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-2xl mb-4 uppercase tracking-tight group-hover:text-brand-red transition-colors">{item.title}</h3>
            <div className="w-12 h-1 bg-brand-red mb-6 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicator */}
      <div className="mt-20 border-t border-gray-100 pt-12 flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
            <span className="text-brand-red font-bold">10k+</span>
          </div>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Tons Monthly</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
            <span className="text-brand-red font-bold">24/7</span>
          </div>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Supply Chain Support</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center">
            <span className="text-brand-red font-bold">100%</span>
          </div>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Transit Safety Record</span>
        </div>
      </div>
    </Section>
  );
};
