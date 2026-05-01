"use client";

import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Truck, ShieldCheck, MapPin, Building2 } from "lucide-react";

export const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 -z-10 transition-transform group-hover:scale-110" />
          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <Image
              src="/steel_logistics_industrial_1777637235023.png"
              alt="Industrial Logistics"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 hidden md:block">
            <span className="text-4xl font-bold block">07+</span>
            <span className="text-xs uppercase tracking-widest font-semibold">Years of Excellence</span>
          </div>
        </div>

        <div>
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">About Our Company</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
            Kolkata Based <br />
            <span className="text-brand-gray/60">Logistics Leaders</span>
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Established in 2018, <strong>Jai Ganapati Translogistic</strong> has grown into a trusted partner for steel plants and trading businesses across Eastern and Southern India.
            </p>
            <p>
              We specialize in the primary road transport of bulk goods, specifically catering to the demanding needs of the steel industry. Our operations are anchored in Kolkata, providing a strategic gateway to major industrial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            {[
              { icon: Building2, title: "Kolkata HQ", desc: "Strategic base of operations" },
              { icon: Truck, title: "Self-Owned Fleet", desc: "Guaranteed availability" },
              { icon: ShieldCheck, title: "Industry Focus", desc: "Experts in Steel & Trading" },
              { icon: MapPin, title: "Regional Power", desc: "Strong local presence" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border border-brand-light hover:border-brand-red/20 transition-colors">
                <item.icon className="w-6 h-6 text-brand-red shrink-0" />
                <div>
                  <h4 className="text-sm font-bold uppercase mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
