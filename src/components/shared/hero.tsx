"use client";

import { motion } from "framer-motion";
import { ArrowDown, ShieldCheck, Factory } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-industrial-dark text-white overflow-hidden architectural-grid pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-industrial-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Copywriting Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="h-[1px] w-8 bg-industrial-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-industrial-accent font-bold">
              Heavy Duty & Architectural Hardware Exporter
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight leading-[1.1]"
          >
            Precision Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              For Global Architecture.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 font-sans max-w-xl font-light leading-relaxed"
          >
            DRG manufactures high-integrity hinges and performance architectural hardware built to withstand intense physical configurations. Serving industrial builders across 25+ countries.
          </motion.p>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <button className="bg-white text-industrial-dark font-sans text-xs uppercase tracking-widest font-bold px-8 py-4 transition-all hover:bg-industrial-accent hover:text-white">
              Explore Product Matrix
            </button>
            <button className="border border-white/20 text-white font-sans text-xs uppercase tracking-widest px-8 py-4 transition-all hover:bg-white/10">
              Download Technical Specifications
            </button>
          </motion.div>

          {/* Trust Parameters */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 max-w-md"
          >
            <div className="flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-industrial-accent mt-0.5" />
              <div>
                <h4 className="font-sans text-xs font-bold uppercase text-white tracking-wide">ISO & CE Compliant</h4>
                <p className="font-sans text-[11px] text-gray-400">Certified global export metrics.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Factory className="w-5 h-5 text-industrial-accent mt-0.5" />
              <div>
                <h4 className="font-sans text-xs font-bold uppercase text-white tracking-wide">Custom Machining</h4>
                <p className="font-sans text-[11px] text-gray-400">OEM blueprints delivered precisely.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Abstract Architectural Shape (Right Column) */}
        <motion.div 
          className="lg:col-span-5 hidden lg:flex justify-center relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          {/* A neat abstract framing element mimicking high end industrial steel grids */}
          <div className="w-80 h-[450px] border border-white/10 relative p-4 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-industrial-accent -mt-[1px] -ml-[1px]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-industrial-accent -mb-[1px] -mr-[1px]" />
            <div className="text-white/20 font-mono text-[9px] uppercase tracking-widest rotate-90 origin-left absolute top-12 -right-4">
              DRG SPECIFICATION MATRIX V2
            </div>
            
            <div className="border border-white/5 flex-grow bg-white/[0.02] backdrop-blur-3xl flex items-center justify-center p-8 text-center">
              <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                [ High Resolution Precision Hardware Imagery ]
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Elegant Infinite Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gray-400">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4 text-industrial-accent" />
        </motion.div>
      </div>
    </section>
  );
}