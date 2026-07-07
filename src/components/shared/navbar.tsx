"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-mono font-bold tracking-wider text-industrial-dark">DRG</span>
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-industrial-accent font-semibold">
            Architectural Hardware
          </span>
        </Link>

        {/* Desktop Menu - High Contrast Charcoal Text */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Products & Specs", path: "/products" },
            { name: "Engineering & QA", path: "/engineering" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-sans font-medium text-industrial-dark hover:text-industrial-accent transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Callouts */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center space-x-2 text-xs font-mono text-gray-600 hover:text-industrial-dark">
            <Globe className="w-4 h-4 text-industrial-accent" />
            <span>EN / INT</span>
          </button>
          
          <Link
            href="/contact"
            className="flex items-center space-x-2 bg-industrial-dark text-white font-sans text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 hover:bg-industrial-accent"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-industrial-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
}