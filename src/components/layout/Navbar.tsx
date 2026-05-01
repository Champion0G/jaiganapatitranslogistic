"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Coverage", href: "#coverage" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-2 rounded-sm group-hover:rotate-12 transition-transform">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold leading-none ${isScrolled ? "text-brand-dark" : "text-white"}`}>
              JAI GANAPATI
            </span>
            <span className={`text-[10px] tracking-[0.2em] font-medium leading-none mt-1 ${isScrolled ? "text-brand-red" : "text-white/80"}`}>
              TRANSLOGISTIC
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-brand-red transition-colors ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="tel:+919937045899">
              <Button variant="outline" size="sm" className={!isScrolled ? "border-white text-white hover:bg-white hover:text-brand-dark" : ""}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? "text-brand-dark" : "text-white"}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? "text-brand-dark" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-brand-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <a href="tel:+919937045899">
                  <Button className="w-full py-4 text-xl">
                    <Phone className="w-6 h-6 mr-3" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/919937045899" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full py-4 text-xl border-white text-white">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
