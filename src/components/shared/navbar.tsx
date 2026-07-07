"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-industrial-dark/90 backdrop-blur-md border-b border-white/10 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-mono font-bold tracking-wider text-white">DRG</span>
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-industrial-accent">
            Architectural Hardware
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Products", "Engineering", "Global Network"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-sans tracking-wide text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Callouts for Foreign Clients */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-xs font-mono text-gray-300 hover:text-white transition-colors">
            <Globe className="w-4 h-4 text-industrial-accent" />
            <span>EN / INT</span>
          </button>
          
          <Link
            href="/contact"
            className="group flex items-center space-x-2 bg-industrial-accent text-white font-sans text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 hover:bg-white hover:text-industrial-dark"
          >
            <span>Request Export Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-industrial-dark border-b border-white/10 px-6 py-8 flex flex-col space-y-6 md:hidden"
          >
            {["Home", "Products", "Engineering", "Global Network"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-sans text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <hr className="border-white/10" />
            <Link
              href="/contact"
              className="w-full text-center bg-industrial-accent text-white text-xs uppercase tracking-widest py-3"
              onClick={() => setIsOpen(false)}
            >
              Request Export Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}