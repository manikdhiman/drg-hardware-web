import Navbar from "@/components/shared/navbar";
import Showroom from "@/components/animations/showroom";
import { ArrowRight, Factory, Settings, ShieldCheck, Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F4F5F6]">
      <Navbar />
      
      {/* Intro Fold */}
      <section className="h-[75vh] flex flex-col justify-end px-6 pb-20 max-w-7xl mx-auto font-sans">
        <div className="max-w-3xl space-y-4">
          <div className="h-[2px] w-12 bg-[#0044FF]" />
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#1A1A1A]">
            The Silver Standard <br />of Engineering.
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl font-light leading-relaxed">
            DRG manufactures high-load capacity structural hinges built for extreme longevity. Scroll below to engage our kinetic showroom mechanisms.
          </p>
        </div>
      </section>

      {/* Kinetic Interactive Showroom */}
      <Showroom />

      {/* SOLID INDUSTRIAL DATA BLOCK (Closes the empty black zone) */}
      <section className="bg-[#0E1013] text-white py-24 px-6 relative z-30 border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold text-[#0044FF] tracking-widest uppercase">PRODUCTION INFRASTRUCTURE</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Forged to Withstand Intense Load Parameters.
            </h2>
            <p className="text-gray-400 text-sm font-light max-w-xl leading-relaxed">
              Our hardware undergoes rigorous testing protocols to confirm tensile strengths exceeding 500 MPa. Sourced by top-tier architectural firms worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/products" className="flex items-center gap-2 bg-[#0044FF] hover:bg-white hover:text-[#1A1A1A] text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-8 transition-all">
                <span>View Heavy Duty Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/engineering" className="flex items-center gap-2 border border-white/20 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 px-8 transition-all">
                <span>Go to Engineering Lab Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div className="p-6 border border-white/5 bg-[#16181D] rounded-xs space-y-2">
              <Factory className="w-5 h-5 text-gray-400" />
              <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wide">CNC Milling</h4>
              <p className="text-[11px] text-gray-500 font-light font-sans leading-normal">High precision tooling maintaining tolerances down to ±0.15mm.</p>
            </div>
            <div className="p-6 border border-white/5 bg-[#16181D] rounded-xs space-y-2">
              <ShieldCheck className="w-5 h-5 text-gray-400" />
              <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wide">CE Certified</h4>
              <p className="text-[11px] text-gray-500 font-light font-sans leading-normal">Fully certified for European and North American building codes.</p>
            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRIAL B2B GLOBAL FOOTER */}
      <footer className="bg-[#0A0C0E] text-gray-500 text-xs py-12 px-6 border-t border-white/5 relative z-30 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col">
            <span className="text-white font-bold text-sm tracking-widest font-sans">DRG ARCHITECTURAL HARDWARE</span>
            <span className="text-[9px] uppercase tracking-wider text-gray-600 mt-1">© 2026 DRG Hinges. Global Export Division.</span>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#0044FF]" /> export@drghinges.in</span>
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#0044FF]" /> Global Distribution Hub</span>
          </div>
        </div>
      </footer>
    </main>
  );
}